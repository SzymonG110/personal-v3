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
    try {
        const {payload} = await jwtVerify(jwt, new TextEncoder().encode(process.env.JWT_SECRET), {
            algorithms: ['HS256']
        })
        return payload.payload as { id: string, login: string }
    } catch (e) {
        return false
    }
}

export const getUserFromCookie = async (jwt: string) => {
    const validate = await validateJWT(jwt)
    if (!validate) return false

    return await db.user.findUnique({
        where: {id: validate.id}
    })
}