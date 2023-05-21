import db from './database'

export const getAllEvents = async () => {
    return await db.event.findMany({
        orderBy: {
            eventDate: 'asc'
        }
    })
}