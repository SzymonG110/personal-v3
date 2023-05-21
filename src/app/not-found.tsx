import Navbar from '../components/navbar.component'
import styles from '../styles/not-found.module.scss'

const Error_404 = () => {
    return (
        <>
            <Navbar/>
            <div className={styles.place}>
                <div className={styles.box}>
                    <h1><span className={styles.green}>Error:</span>&nbsp;404</h1>
                    <p>The path you are on probably does not exist, go to the main page.</p>
                </div>
            </div>
        </>
    )
}

export default Error_404