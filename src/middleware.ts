import {NextRequest, NextResponse} from 'next/server'
import {jwtVerify} from 'jose'

const verifyJWT = async (jwt: string) => {
    const {payload} = await jwtVerify(jwt, new TextEncoder().encode(process.env.JWT_SECRET))
    return payload
};

export default async function middleware(req: NextRequest, res: NextResponse) {
    const {pathname} = req.nextUrl

    if (pathname.includes('dashboard') || pathname.includes('panel')) {
        const jwt = req.cookies.get(process.env.COOKIE_NAME as string)

        if (!jwt) {
            req.nextUrl.pathname = '/panel'
            return NextResponse.redirect(req.nextUrl)
        }

        try {
            await verifyJWT(jwt.value)

            if (pathname === '/panel') {
                req.nextUrl.pathname = '/panel/dashboard'
                return NextResponse.redirect(req.nextUrl)
            }

            return NextResponse.next()
        } catch (e) {
            req.nextUrl.pathname = "/panel"
            return NextResponse.redirect(req.nextUrl)
        }
    }

    return NextResponse.next()
}