import styles from './journey.module.scss'
import clsx from 'clsx'
import Timeline from './timeline.component'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faJs, faNodeJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons'
import {faDatabase} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import blob from '../../public/img/blob.png'

const Journey = () => {


    return (
        <div id='about' className={styles.journey}>
            <h2 className={styles.title}>
                My <span className={styles.green}>Journey</span>
                <Image src={blob} alt='blob'/>
            </h2>

            <div className={styles.timeline}>
                <Timeline/>
            </div>

            <div className={styles.move}>
                <div className={styles.stats}>
                    <div>
                        <span className={clsx(styles.green, styles.large)}>{new Date().getFullYear() - 2020}</span>
                        &nbsp;<span className={styles.large}>YEARS</span> of experience
                    </div>
                    <div>
                        <span className={clsx(styles.green, styles.large)}>10</span> and <span
                        className={styles.large}>more</span> projects
                    </div>
                </div>
                <div className={styles.skills}>
                    <FontAwesomeIcon icon={faNodeJs}/>
                    <FontAwesomeIcon icon={faJs}/>
                    <FontAwesomeIcon icon={faReact}/>
                    <FontAwesomeIcon icon={faSass}/>
                    <FontAwesomeIcon icon={faDatabase}/>
                    <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="2500"
                         height="2500">
                        <path className={styles.st0} d="M0 200V0h400v400H0"/>
                        <path className={styles.st1}
                              d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Journey