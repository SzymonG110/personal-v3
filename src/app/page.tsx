import styles from '../styles/page.module.scss'
import Hero from '../components/main_layout/hero.component'
import Journey from '../components/main_layout/journey.component'
import Projects from '../components/main_layout/projects.component'
import Contact from '../components/main_layout/contact.component'
import Footer from '../components/main_layout/footer.component'

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