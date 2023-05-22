import styles from './contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
	return (
		<div className={styles.contact} id="contact">
			<h2>
				LET&lsquo;S <span className={styles.green}>TALK</span>
			</h2>
			<div className={styles.contacts}>
				<a target="_blank" href="https://github.com/SzymonG110">
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a target="_blank" href="https://discord.com/users/548255235823501322">
					<FontAwesomeIcon icon={faDiscord} />
				</a>
			</div>
		</div>
	)
}

export default Contact
