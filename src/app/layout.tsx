import '../styles/globals.scss'
import {Unbounded} from 'next/font/google'

const unbounded = Unbounded({
    subsets: ['latin']
})

export const metadata = {
    title: 'Szymon Górnikowski - Portfolio',
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

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="pl-PL">
        <body className={unbounded.className}>{children}</body>
        </html>
    )
}
