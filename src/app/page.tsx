import styles from '../styles/page.module.scss'
import Hero from '../components/hero.component'
import Journey from '../components/journey.component'
import Projects from '../components/projects.component'
import Contact from '../components/contact.component'
import Footer from '../components/footer.component'

const Home = () => {
    return (
        <>
            <Hero/>
            <div className={styles.container}>
                <Journey/>
                <Projects/>
            </div>
            <div className={styles.end}>
                <Contact/>
                <Footer/>
            </div>
        </>
    )
}

export default Home