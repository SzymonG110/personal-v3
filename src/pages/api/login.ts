import type {NextApiRequest, NextApiResponse} from 'next'
import database from '../../lib/database'
import {comparePasswords, createJWT} from '../../lib/auth'
import {serialize} from 'cookie'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const data = await database.user.findUnique({
            where: {
                login: req.body.login
            }
        })

        if (!data || !await comparePasswords(req.body.password, data.password))
            return res.status(401).json({message: 'Invalid login or password'})

        const jwt = await createJWT(data)

        res.setHeader('Set-Cookie', serialize(process.env.COOKIE_NAME as string, jwt, {
            httpOnly: true,
            path: '/',
            maxAge: 3600 * 24 * 7
        }))

        res.status(200).json({message: 'Successfully logged in'})
    } else {
        res.status(405).json({message: 'Method not allowed'})
    }
}

export default handler