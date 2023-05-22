import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllProjects } from '../../lib/project'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'GET') {
		const projects = await getAllProjects()

		return res.status(200).json({
			message: 'Successfully fetched data',
			projects,
		})
	} else {
		return res.status(405).json({ message: 'Method not allowed' })
	}
}

export default handler
