import styles from './navbar.module.scss'
import Link from 'next/link'

const PanelNavbar = () => {
    return (
        <div className={styles.navbar}>
            <Link href='/dashboard'>Dashboard</Link>
            <Link href='/dashboard/projects'>View Projects</Link>
        </div>
    )
}

export default PanelNavbar