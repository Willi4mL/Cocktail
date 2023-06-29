import React, { useState, useEffect } from 'react'
import Header from './Header'
import Menu from './Menu'
import { clickedMenu, screenSizeState } from "./recoil"
import { useRecoilState } from "recoil"
import heroCoke from '../../images/hero-coke.png'
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

const MainPage = () => {
	const [isMenuClicked, setIsMenuClicked] = useRecoilState(clickedMenu)
	const [isResize, setIsResize] = useRecoilState(screenSizeState)

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
				<p className='first-paragraph'>Välkommen till vår hemsida, en plats där kunskap och kreativitet möts i en perfekt symbios. Vi är stolta över att erbjuda dig en unik upplevelse som kombinerar gamla klassiker med nya och spännande drinkar. Oavsett om du är en erfaren bartenderska eller en nyfiken amatör, kommer du att hitta inspiration och nya kunskaper här.</p>
			</section>
			{isResize &&
				<p className='side-burger-menu' onClick={() => setIsMenuClicked(!isMenuClicked)}> <HiOutlineMenuAlt3 /> </p>}
		</div>
	)
}

export default MainPage