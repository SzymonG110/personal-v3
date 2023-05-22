'use client'

import styles from './navbar.module.scss'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import gsap from 'gsap'
import { useEffect } from 'react'

const Navbar = () => {
	const navbar = document.getElementById('navbar__button')
	const tl = gsap.timeline()
	let hamburger = faBars

	useEffect(() => {
		if (window.innerWidth <= 799)
			tl.from('#content', {
				x: '-100%',
				opacity: 0,
				display: 'none',
				duration: 1,
			})
	}, [])

	const toggleNavbar = () => {
		hamburger === faBars ? (hamburger = faX) : (hamburger = faBars)

		if (document.getElementById('content')?.style.display === 'flex') {
			tl.to('#content', {
				x: '-100%',
				opacity: 0,
				display: 'none',
				duration: 1,
			})
			document.body.style.height = 'auto'
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
					<a href="/#about">About me</a>
					<a href="/#projects">My projects</a>
					<a href="/#contact">Contact</a>
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

			<div className={styles.hamburger} id="navbar__button">
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
