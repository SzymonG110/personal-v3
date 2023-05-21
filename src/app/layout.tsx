import '../styles/globals.scss'
import {Open_Sans, Unbounded} from 'next/font/google'
import {Toaster} from 'react-hot-toast'

const unbounded = Unbounded({
    subsets: ['latin']
})
const open_sans = Open_Sans({
    subsets: ['latin']
})

export const metadata = {
    title: 'Portfolio - Szymon Górnikowski',
    description: 'My best projects, skills and contact information.',
    authors: {
        name: 'Szymon Górnikowski',
        url: 'https://github.com/SzymonG110'
    },
    viewport: 'width=device-width, initial-scale=1.0',
    keywords: [
        'Szymon Górnikowski',
        'Szymon Gornikowski',
        'Górnikowski',
        'Gornikowski',
        'Szymon Górnikowski portfolio',
        'Szymon Gornikowski portfolio',
        'Górnikowski portfolio',
        'Gornikowski portfolio',
        'Szymon Górnikowski projects',
        'Szymon Gornikowski projects',
    ]
}

const RootLayout = ({children}: { children: React.ReactNode }) => {
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
        {children}
        </body>
        </html>
    )
}

export default RootLayout