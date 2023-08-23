import React, { useEffect } from 'react'
import Header from './Header'
import Menu from './Menu'
import { clickedMenu, screenSizeState, clickedAbout } from "./recoil"
import { useRecoilState } from "recoil"
import heroCoke from '../../images/hero-coke.png'
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

const MainPage = () => {
	const [isMenuClicked, setIsMenuClicked] = useRecoilState(clickedMenu)
	const [isResize, setIsResize] = useRecoilState(screenSizeState)
	const [isAboutClicked, setIsAboutClicked] = useRecoilState(clickedAbout)

	const handleScreenSize = () => {
		if (window.innerWidth < 769) {
			setIsResize(false)
		}
		else {
			setIsResize(true)
		}
	}

	useEffect(() => {
		handleScreenSize()
		window.addEventListener('resize', handleScreenSize)
		return () => window.removeEventListener('resize', handleScreenSize)
	}, [])

	return (
		<div className='hero-page'>
			<Header />
			{isMenuClicked && <Menu />}
			<section className='main-content-container'>
				<img className='hero-picture' src={heroCoke} alt='hero picture'></img>
				<h2 className='intro-heading'>En plats där kunskap och <span className='heading-gradient'>kreativitet möts i en perfekt symbios</span></h2> 
				<p className='first-paragraph'>Vi är stolta över att erbjuda dig en unik upplevelse som kombinerar gamla klassiker med nya och spännande drinkar. Oavsett om du är en erfaren bartenderska eller en nyfiken amatör, kommer du att hitta inspiration och nya kunskaper här.</p>
				<button className='read-more' onClick={() => setIsAboutClicked(true)}>Läs mer &#8250;</button>
			</section>
			{isResize &&
				<p className='side-burger-menu' onClick={() => setIsMenuClicked(!isMenuClicked)}> <HiOutlineMenuAlt3 /> </p>}
		</div>
	)
}

export default MainPage