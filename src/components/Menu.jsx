import React from 'react'
import { useRecoilState } from 'recoil'
import { visibleAllCocktails, clickedAbout, clickedMenu, screenSizeState } from './recoil'

function Menu() {
	const [isCocktail, setIsCocktail] = useRecoilState(visibleAllCocktails)
	const [isAboutClicked, setIsAboutClicked] = useRecoilState(clickedAbout)
	const [isMenuClicked, setIsMenuClicked] = useRecoilState(clickedMenu)
	const [isResize, setIsResize] = useRecoilState(screenSizeState)

	const handleCocktail = () => {
		setIsCocktail(true)
		setIsAboutClicked(false)
		setIsMenuClicked(false)
	}

	const handleAbout = () => {
		setIsAboutClicked(true)
		setIsCocktail(false)
		setIsMenuClicked(false)
	}

	const menuClassName = isResize ? 'desktop-screen' : 'mobile-screen'

	return (
		<div className={menuClassName}>
			<h3 className='menu-heading'>Meny</h3>
			<ul>
				<li onClick={handleCocktail}>Visa alla drinkar</li>
				<li onClick={handleAbout}>Om oss</li>
				<li>Logga in</li>
			</ul>
		</div>
	)
}

export default Menu