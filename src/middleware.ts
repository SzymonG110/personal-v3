import {NextRequest, NextResponse} from 'next/server'
import {jwtVerify} from 'jose'

const verifyJWT = async (jwt: string) => {
    const {payload} = await jwtVerify(jwt, new TextEncoder().encode(process.env.JWT_SECRET))
    return payload
};

export default async function middleware(req: NextRequest, res: NextResponse) {
    const {pathname} = req.nextUrl

    if (pathname.startsWith('/dashboard') || pathname.startsWith('/login')) {
        const jwt = req.cookies.get(process.env.COOKIE_NAME as string)

        if (!jwt) {
            if (pathname.startsWith('/login'))
                return NextResponse.next()
            req.nextUrl.pathname = '/login'
            return NextResponse.redirect(req.nextUrl)
        }

        try {
            await verifyJWT(jwt.value)

            if (pathname === '/login') {
                req.nextUrl.pathname = '/dashboard'
                return NextResponse.redirect(req.nextUrl)
            }

            return NextResponse.next()
        } catch (e) {
            if (pathname.startsWith('/login'))
                return NextResponse.next()
            req.nextUrl.pathname = "/login"
            return NextResponse.redirect(req.nextUrl)
        }
    }

    return NextResponse.next()
}