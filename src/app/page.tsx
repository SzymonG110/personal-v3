import styles from '../styles/page.module.scss'
import Hero from '../components/hero/hero.component'
import Journey from '../components/journey/journey.component'
import Projects from '../components/projects/projects.component'
import Contact from '../components/contact/contact.component'
import Footer from '../components/footer/footer.component'

const Home = () => {
	return (
		<>
			<Hero />
			<div className={styles.container}>
				<Journey />
				<Projects />
			</div>
			<div className={styles.end}>
				<Contact />
				<Footer />
			</div>
		</>
	)
}

export default Home
