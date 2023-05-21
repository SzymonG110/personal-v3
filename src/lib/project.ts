import db from './database'
import {Prisma} from '@prisma/client'

export const getAllProjects = async () => {
    return await db.project.findMany()
}

export const addProject = async (project: Prisma.ProjectCreateInput) => {
    return await db.project.create({
        data: project
    })
}