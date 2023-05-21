'use client'

import {useEffect, useState} from 'react'
import {getProjects} from '../../../../lib/api'
import toast from 'react-hot-toast'
import {Prisma} from '@prisma/client'
import Modal from '../../../../components/shared/modal.component'

const Dashboard = () => {
    const [projects, setProjects] = useState<Prisma.ProjectCreateInput[] | null>(null)
    const [modalIsOpen, setIsOpen] = useState(false)

    useEffect(() => {
        (async () => {
            const response = await getProjects()
            if (response.error)
                return toast.error('Failed to get projects')
            setProjects(response.projects)
        })()
    }, [])

    return (
        <>
            <span onClick={() => setIsOpen(true)}>Add project</span>

            <Modal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}>
                <h1>123</h1>
                <h1>123</h1>
            </Modal>

            {projects && projects.map((project, index) => () => {
                return (
                    <div key={index}>
                        <h1>{project.name}</h1>
                        <p>{project.description}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Dashboard