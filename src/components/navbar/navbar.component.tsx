'use client'

import styles from './navbar.module.scss'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import gsap from 'gsap'
import { useEffect } from 'react'
import Link from 'next/link'

const Navbar = () => {
	const tl = gsap.timeline()
	let hamburger = faBars

	useEffect(() => {
		if (window.innerWidth <= 799)
			tl.to('#content', {
				x: '-100%',
				opacity: 0,
				display: 'none',
				duration: 1,
			})
	}, [])

	const toggleNavbar = () => {
		if (window.innerWidth > 799) return

		hamburger === faBars ? (hamburger = faX) : (hamburger = faBars)

		if (document.getElementById('content')?.style.display === 'flex') {
			document.body.style.height = 'auto'

			tl.to('#content', {
				x: '-100%',
				opacity: 0,
				display: 'none',
				duration: 1,
			})
		} else {
			document.body.style.height = '100vh'

			tl.to('#content', {
				x: '0%',
				opacity: 1,
				display: 'flex',
				position: 'fixed',
				duration: 1,
			})
		}
	}

	return (
		<div className={styles.nav}>
			<div className={styles.content} id="content">
				<div className={styles.logo}>
					<Image
						src="/img/avatar.png"
						alt="avatar"
						width="1024"
						height="1024"
					/>
				</div>

				<div className={styles.links}>
					<Link href="/#about" onClick={toggleNavbar}>
						About me
					</Link>
					<Link href="/#projects" onClick={toggleNavbar}>
						My projects
					</Link>
					<Link href="/#contact" onClick={toggleNavbar}>
						Contact
					</Link>
				</div>

				<div className={styles.icons}>
					<a target="_blank" href="https://github.com/SzymonG110">
						<FontAwesomeIcon icon={faGithub} width="40px" height="40px" />
					</a>
					<a
						target="_blank"
						href="https://discord.com/users/548255235823501322"
					>
						<FontAwesomeIcon icon={faDiscord} width="40px" height="40px" />
					</a>
				</div>
			</div>

			<div className={styles.hamburger}>
				<FontAwesomeIcon
					icon={hamburger}
					width="40px"
					height="40px"
					onClick={toggleNavbar}
				/>
			</div>
		</div>
	)
}

export default Navbar
