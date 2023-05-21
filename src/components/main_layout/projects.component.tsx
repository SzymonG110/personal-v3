'use client'

import styles from './projects.module.scss'
import Image from 'next/image'
import blob from '../../../public/img/blob.png'
import {getProjects} from '../../lib/api'
import toast from 'react-hot-toast'
import {useEffect, useState} from "react";
import {Prisma} from '@prisma/client'
import clsx from 'clsx'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

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
                    <>
                        <div className={i % 2 !== 1 ? styles.project : styles.projectReverse} key={i}>
                            <div className={styles.image}>
                                <img
                                    src={project.image as string}
                                    alt='image'/>
                            </div>

                            <div className={styles.data}>
                                <div className={clsx(styles.info, styles.green)}>
                                    <div className={styles.title}>{project.name}</div>
                                    <div className={styles.icons}>
                                        {(project.technologies as string[]).map((t, j) => (
                                            <>
                                                <FontAwesomeIcon icon={faGithub} key={j}/>
                                            </>
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.description}>{project.description}</div>
                            </div>
                        </div>
                    </>
                ))}
                {/*    <div className={styles.project}>*/}
                {/*        <div className={styles.image}>*/}
                {/*            <img*/}
                {/*                src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'*/}
                {/*                alt='obraz'/>*/}
                {/*        </div>*/}

                {/*        <div className={styles.data}>*/}
                {/*            <div className={clsx(styles.info, styles.green)}>*/}
                {/*                <div className={styles.title}>Test Page</div>*/}
                {/*                <div className={styles.icons}>*/}
                {/*                    <FontAwesomeIcon icon={faGithub}/>*/}
                {/*                    <FontAwesomeIcon icon={faGithub}/>*/}
                {/*                    <FontAwesomeIcon icon={faGithub}/>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className={styles.description}>*/}
                {/*                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed*/}
                {/*                do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse*/}
                {/*                ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <div className={styles.projectReverse}>*/}
                {/*        <div className={styles.image}>*/}
                {/*            <img*/}
                {/*                src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'*/}
                {/*                alt='obraz'/>*/}
                {/*        </div>*/}

                {/*        <div className={styles.data}>*/}
                {/*            <div className={clsx(styles.info, styles.green)}>*/}
                {/*                <div className={styles.title}>Test Page</div>*/}
                {/*                <div className={styles.icons}>*/}
                {/*                    <FontAwesomeIcon icon={faGithub}/>*/}
                {/*                    <FontAwesomeIcon icon={faGithub}/>*/}
                {/*                    <FontAwesomeIcon icon={faGithub}/>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className={styles.description}>*/}
                {/*                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed*/}
                {/*                do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse*/}
                {/*                ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
            </div>
        </div>
    )
}

export default Projects