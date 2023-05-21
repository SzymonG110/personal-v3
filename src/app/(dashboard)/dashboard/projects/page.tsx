'use client'

import {useEffect, useRef, useState} from 'react'
import {addProject, getProjects} from '../../../../lib/api'
import toast from 'react-hot-toast'
import {Prisma} from '@prisma/client'
import Modal from '../../../../components/shared/modal.component'
import styles from '../../../../styles/dashboard_layout/projects.module.scss'

const Dashboard = () => {
    const [projects, setProjects] = useState<Prisma.ProjectCreateInput[] | []>([])
    const [modalIsOpen, setIsOpen] = useState(false)
    const nameRef = useRef<HTMLInputElement>(null)
    const descriptionRef = useRef<HTMLInputElement>(null)
    const imageRef = useRef<HTMLInputElement>(null)
    const githubRef = useRef<HTMLInputElement>(null)
    const technologiesRef = useRef<HTMLSelectElement>(null)

    useEffect(() => {
        fetchProjects()
    }, [])

    const fetchProjects = async () => {
        const response = await getProjects()
        if (response.error)
            return toast.error('Failed to get projects')
        setProjects(response.projects)

        toast.success('Successfully got projects')
    }

    const handleModalSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsOpen(false)

        const data = {
            name: nameRef.current?.value,
            description: descriptionRef.current?.value,
            image: imageRef.current?.value,
            github: githubRef.current?.value,
            technologies: technologiesRef.current?.value
        }
        console.log(data)
        const response = await addProject(data as any)
        console.log(response)

        if (response.error)
            return toast.error('Failed to add project')
        toast.success('Successfully added project')
    }

    return (
        <div className={styles.projects}>
            <span onClick={() => setIsOpen(true)} className={styles.add}>Add project</span>

            <Modal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}>
                <h1>Add project</h1>
                <form onSubmit={handleModalSubmit}>
                    Name: <input type='text' placeholder='Name' ref={nameRef}/> <br/>
                    Description: <input type='text' placeholder='Description' ref={descriptionRef}/> <br/>
                    Image: <input type='file' accept='image/*' ref={imageRef}/> <br/>
                    Technologies: <br/>
                    <select multiple={true} ref={technologiesRef}>
                        <option value='HTML'>HTML</option>
                        <option value='CSS'>CSS</option>
                    </select> <br/>
                    Github: <input type='text' placeholder='GitHub' ref={githubRef}/> <br/>
                    <input type='submit' value='Add'/>
                </form>
            </Modal>

            {projects.map((project, i) => (
                <div key={i}>
                    <h1>{project.name}</h1>
                    <h1>{project.description}</h1>
                </div>
            ))}
        </div>
    )
}

export default Dashboard