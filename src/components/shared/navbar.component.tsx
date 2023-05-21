import styles from './navbar.module.scss'
import Image from 'next/image'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDiscord, faGithub} from '@fortawesome/free-brands-svg-icons'
// import {useRouter} from 'next/navigation'

const Navbar = () => {
    // const router = useRouter()

    return (
        <div className={styles.nav}>
            <div className={styles.logo}>
                <Image src='/img/avatar.png' alt='avatar' width='1024' height='1024'/>
            </div>

            <div className={styles.links}>
                <a href='/#about'>About me</a>
                <a href='/#projects'>My projects</a>
                <a href='/#contact'>Contact</a>
            </div>

            <div className={styles.icons}>
                <a href='https://github.com/SzymonG110'>
                    <FontAwesomeIcon icon={faGithub} width='40px' height='40px'/>
                </a>
                <a href='https://discord.com/users/548255235823501322'>
                    <FontAwesomeIcon icon={faDiscord} width='40px' height='40px'/>
                </a>
            </div>
        </div>
    )
}

export default Navbar