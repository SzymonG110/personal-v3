import styles from './hero.module.scss'
import Navbar from '../shared/navbar.component'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className={styles.hero}>
            <Navbar/>
            <div className={styles.content}>
                <h1>
                    Hello, I&lsquo;m
                    <div className={styles.typing}>
                        <span>Szymon</span>
                    </div>
                    <Image src='/img/smile.png' alt='smile' width='100' height='100'/>
                </h1>
                <span className={styles.desc}>
                    I&lsquo;m a {new Date().getFullYear() - 2007}-year-old programmer specializing in backend development, aspiring to become a full-stack developer. I&lsquo;m passionate about programming, teamwork, and creating innovative solutions with attractive user interfaces, eager to tackle new challenges and collaborate with fellow technology enthusiasts.
                </span>
            </div>
        </div>
    )
}

export default Hero