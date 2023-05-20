import styles from './footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <span className={styles.green}>Szymon Górnikowski</span>
            &nbsp;COPYRIGHT {new Date().getFullYear() === 2023 ? '2023' : `2023-${new Date().getFullYear()}`}
        </div>
    )
}

export default Footer