import type {NextApiRequest, NextApiResponse} from 'next'
import {addProject, getAllProjects} from '../../lib/project'
import {validateJWT} from '../../lib/auth'
import {Prisma} from '@prisma/client'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        const projects = await getAllProjects()

        return res.status(200).json({
            message: 'Successfully fetched data',
            projects
        })
    }
    if (req.method === 'POST') {
        const token = req.cookies[process.env.COOKIE_NAME as string]
        if (!token || !await validateJWT(token)) return res.status(401).json({message: 'Unauthorized'})

        if (!req.body) return res.status(400).json({message: 'Invalid body'})

        const body: Prisma.ProjectCreateInput = req.body
        if (!body.name || !body.description || !body.image || !body.technologies)
            return res.status(400).json({message: 'Invalid body'})

        const project = await addProject(body)
        return res.status(200).json(project)
    } else {
        return res.status(405).json({message: 'Method not allowed'})
    }
}

export default handler