import React, { useEffect, useRef } from 'react'
import Header from './Header'
import Menu from './Menu'
import { clickedMenu, screenSizeState, clickedAbout, visibleAllCocktails } from "./recoil"
import { useRecoilState } from "recoil"
import heroCoke from '../../images/hero-coke.png'
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

const MainPage = () => {
	const [isMenuClicked, setIsMenuClicked] = useRecoilState(clickedMenu)
	const [isResize, setIsResize] = useRecoilState(screenSizeState)
	const [isAboutClicked, setIsAboutClicked] = useRecoilState(clickedAbout)
	const [isCocktail, setIsCocktail] = useRecoilState(visibleAllCocktails)

	const handleScreenSize = () => {
		if (window.innerWidth < 1040) {
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

	const menuRef = useRef(null)

	useEffect(() => {
		const handleDocumentClick = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setIsMenuClicked(false)
			}
		}

		document.addEventListener('click', handleDocumentClick)

		return () => {
			document.removeEventListener('click', handleDocumentClick)
		}
	}, [setIsMenuClicked])

	useEffect(() => {
		const changeValueByScroll = () => {
			if(isAboutClicked) {
				setIsAboutClicked(false)
			}
		}
		window.addEventListener('scroll', changeValueByScroll)
		return () => {
			window.removeEventListener('scroll', changeValueByScroll)
		}
	},[isAboutClicked])

	const handleMenuClick = () => {
		setIsAboutClicked(false)
		setIsCocktail(false)
		setIsMenuClicked(!isMenuClicked)
	}

	const handleReadMore = () => {
		setIsAboutClicked(true)
		setIsCocktail(false)
	}

	return (
		<div className='hero-page'>
			<Header />
			{isMenuClicked && <Menu />}
			<section className='main-content-container'>
				<img className='hero-picture' src={heroCoke} alt='hero picture'></img>
				<h2 className='intro-heading'>En plats där kunskap och <span className='heading-gradient'>kreativitet möts i en perfekt symbios</span></h2>
				<p className='first-paragraph'>Vi är stolta över att erbjuda dig en unik upplevelse som kombinerar gamla klassiker med nya och spännande drinkar. Oavsett om du är en erfaren bartenderska eller en nyfiken amatör, kommer du att hitta inspiration och nya kunskaper här.</p>
				<button className='read-more' onClick={handleReadMore}>Läs mer &#8250;</button>
			</section>
			{isResize &&
				<p className='side-burger-menu' onClick={handleMenuClick} ref={menuRef}> <HiOutlineMenuAlt3 /> </p>}
		</div>
	)
}

export default MainPage