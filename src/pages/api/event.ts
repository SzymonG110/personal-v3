import type {NextApiRequest, NextApiResponse} from 'next'
import {getAllEvents} from '../../lib/timeline'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        const events = await getAllEvents()

        return res.status(200).json({
            message: 'Successfully fetched data',
            events
        })
    } else {
        return res.status(405).json({message: 'Method not allowed'})
    }
}

export default handler