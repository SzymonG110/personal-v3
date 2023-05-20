import bcrypt from 'bcrypt'
import {jwtVerify, SignJWT} from 'jose'
import db from './database'
import {Prisma} from '@prisma/client'

export const hashPassword = (password: string) => bcrypt.hash(password, 10)

export const comparePasswords = (plainTextPassword: string, hashedPassword: string) => bcrypt.compare(plainTextPassword, hashedPassword)

export const createJWT = (user: Prisma.UserCreateInput) => {
    const iat = Math.floor(Date.now() / 1000)
    const exp = iat + 60 * 60 * 24 * 7


    return new SignJWT({payload: {id: user.id, login: user.login}})
        .setProtectedHeader({alg: "HS256", typ: "JWT"})
        .setExpirationTime(exp)
        .setIssuedAt(iat)
        .setNotBefore(iat)
        .sign(new TextEncoder().encode(process.env.JWT_SECRET))
}

export const validateJWT = async (jwt: string | Uint8Array) => {
    const {payload} = await jwtVerify(jwt, new TextEncoder().encode(process.env.JWT_SECRET))
    return payload.payload as any
}

export const getUserFromCookie = async (cookies: any) => {
    const jwt = cookies.get(process.env.COOKIE_NAME)
    const {id} = await validateJWT(jwt.value)
    return await db.user.findUnique({
        where: {id}
    })
}