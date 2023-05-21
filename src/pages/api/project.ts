import type {NextApiRequest, NextApiResponse} from 'next'
import {getAllProjects} from '../../lib/project'
import {validateJWT} from '../../lib/auth'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        const projects = await getAllProjects()

        res.status(200).json({
            message: 'Successfully fetched data',
            projects
        })
    }
    if (req.method === 'POST') {
        const token = req.cookies[process.env.COOKIE_NAME as string]
        if (!token) return res.status(401).json({message: 'Unauthorized'})

        if (!await validateJWT(token))
            return res.status(401).json({message: 'Unauthorized'})
    } else {
        res.status(405).json({message: 'Method not allowed'})
    }
}

export default handler