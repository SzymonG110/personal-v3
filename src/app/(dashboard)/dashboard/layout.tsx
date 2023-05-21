import '../../../styles/globals.scss'
import styles from '../../../styles/dashboard_layout/layout.module.scss'
import {Open_Sans, Unbounded} from 'next/font/google'
import {Toaster} from 'react-hot-toast'
import PanelNavbar from '../../../components/panel_layout/navbar.component'

const unbounded = Unbounded({
    subsets: ['latin']
})
const open_sans = Open_Sans({
    subsets: ['latin']
})

export const metadata = {
    title: 'Portfolio Dashboard - Szymon Górnikowski'
}

const DashboardLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <html lang="pl-PL">
        <body className={unbounded.className}>
        <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
                className: open_sans.className,
                duration: 5000
            }}
        />
        <div className={styles.container}>
            <div className={styles.menu}>
                <div className={styles.left}>
                    <PanelNavbar/>
                </div>
                <div className={styles.right}>
                    {children}
                </div>
            </div>
        </div>
        </body>
        </html>
    )
}

export default DashboardLayout