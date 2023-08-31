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
				<li className='menuOption' onClick={handleCocktailClick}>Visa alla drinkar</li>
				<li className='menuOption' onClick={handleAboutClick}>Om oss</li>
				<li className='menuOption'>Logga in</li>
			</ul>
		</div>
	)
}

export default Menu