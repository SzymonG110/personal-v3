import db from './database'

export const getAllProjects = async () => {
    return await db.project.findMany()
}