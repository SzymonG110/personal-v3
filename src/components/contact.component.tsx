import styles from './contact.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faDiscord} from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return (
        <div className={styles.contact} id='contact'>
            <h2>LET&lsquo;S <span className={styles.green}>TALK</span></h2>
            <div className={styles.contacts}>
                <FontAwesomeIcon icon={faGithub}/>
                <FontAwesomeIcon icon={faDiscord}/>
            </div>
        </div>
    )
}

export default Contact