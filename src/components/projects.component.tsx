'use client'

import styles from './projects.module.scss'
import Image from 'next/image'
import blob from '../../public/img/blob.png'
import {getProjects} from '../lib/api'
import toast from 'react-hot-toast'
import {useEffect, useState} from "react";
import {Prisma} from '@prisma/client'
import clsx from 'clsx'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faJs, faReact, faSass} from '@fortawesome/free-brands-svg-icons'

const Projects = () => {
    const [projects, setProjects] = useState<Prisma.ProjectCreateInput[] | []>([])

    useEffect(() => {
        fetchProjects()
    }, [])

    const fetchProjects = async () => {
        const response = await getProjects()
        if (response.error)
            return toast.error('Failed to get projects')
        setProjects(response.projects)
    }

    return (
        <div className={styles.projects} id='projects'>
            <h2 className={styles.title}>
                Projects I&lsquo;ve been<br/><span className={styles.green}>involved</span>
                <Image src={blob} alt='blob'/>
            </h2>

            <div className={styles.list}>
                {projects.map((project, i) => (
                    <div className={i % 2 === 0 ? styles.project : styles.projectReverse} key={i}>
                        <div className={styles.image}>
                            <Image src={project.image as string} alt='image'/>
                        </div>

                        <div className={styles.data}>
                            <div className={clsx(styles.info, styles.green)}>
                                <div className={styles.title}>{project.name}</div>
                                <div className={styles.icons}>
                                    {(project.github && project.github !== '') && (
                                        <a target='_blank' href={project.github}>
                                            <FontAwesomeIcon icon={faGithub}/>
                                        </a>
                                    )}
                                    {(project.technologies as string[]).map((t, j) => (
                                        <span key={`${i} ${j}`}>
                                            {t === 'TypeScript' && (
                                                <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 400 400" width="40" height="40">
                                                    <path className={styles.st0} d="M0 200V0h400v400H0"/>
                                                    <path className={styles.st1}
                                                          d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z"/>
                                                </svg>
                                            )}
                                            {(t === 'JavaScript') && (
                                                <FontAwesomeIcon icon={faJs}/>
                                            )}
                                            {(t === 'React' || t === 'Next.js' || t === 'Vite') && (
                                                <FontAwesomeIcon icon={faReact}/>
                                            )}
                                            {(t === 'SCSS' || t === 'SASS') && (
                                                <FontAwesomeIcon icon={faSass}/>
                                            )}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.description}>{project.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects