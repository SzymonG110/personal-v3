import styles from '../styles/page.module.scss'
import Hero from '../components/hero.component'
import Journey from '../components/journey.component'
import Projects from '../components/projects.component'
import Contact from '../components/contact.component'
import Footer from '../components/footer.component'

const Home = () => {
    return (
        <div className={styles.main}>
            <Hero/>
            <div className={styles.container}>
                <Journey/>
                <Projects/>
            </div>
            <div className={styles.end}>
                <Contact/>
                <Footer/>
            </div>
        </div>
    )
}

export default Home