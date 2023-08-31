import React from 'react'
import { useRecoilState } from 'recoil'
import { screenSizeState, clickedAbout, visibleAllCocktails, clickedMenu } from './recoil'

function Menu() {
	const [isResize, setIsResize] = useRecoilState(screenSizeState)
	const [isAboutClicked, setIsAboutClicked] = useRecoilState(clickedAbout)
	const [isCocktail, setIsCocktail] = useRecoilState(visibleAllCocktails)
	const [isMenuClicked, setIsMenuClicked] = useRecoilState(clickedMenu)

	const menuClassName = isResize ? 'desktop-screen' : 'mobile-screen'

	const handleAboutClick = () => {
		setIsAboutClicked(true)
		setIsCocktail(false)
		setIsMenuClicked(false)
	}

	const handleCocktailClick = () => {
		setIsAboutClicked(false)
		setIsCocktail(true)
		setIsMenuClicked(false)
	}

	return (
		<div className={menuClassName}>
			<h5 className='menu-heading'>Meny</h5>
			<ul>
				<li className='menuOption' onClick={handleCocktailClick}> <img className='menu-icon' src='../images/cocktail-icon.png' alt='Drink'></img><p className='menu-option-heading'>Drinkar</p>
					<p className='menu-description'>Visa alla våra drinkar som lagts in i vårat sortiment</p></li>

				<li className='menuOption' onClick={handleAboutClick}> <img className='menu-icon' src='../images/about-icon.png' alt='Om oss'></img><p className='menu-option-heading'>Om oss</p>
					<p className='menu-description'>Läs mer om oss, våran vision och våra mål</p></li>
				<li className='menuOption'> <img className='menu-icon' src='../images/login-icon.png' alt='Logga in'></img><p className='menu-option-heading'>Logga in</p>
					<p className='menu-description'>För att kunna sprida vidare din drink kunskap</p></li>
			</ul>
		</div>
	)
}

export default Menu