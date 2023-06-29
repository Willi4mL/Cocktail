import React from 'react'
import { useRecoilState } from 'recoil'
import { visibleAllCocktails, clickedAbout, clickedMenu } from './recoil'

function Menu() {
	const [isCocktail, setIsCocktail] = useRecoilState(visibleAllCocktails)
	const [isAboutClicked, setIsAboutClicked] = useRecoilState(clickedAbout)
	const [isMenuClicked, setIsMenuClicked] = useRecoilState(clickedMenu)

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

	return (
		<div className='menu-container'>
			<ul>
				<li onClick={handleCocktail}>Visa alla drinkar</li>
				<li onClick={handleAbout}>Om oss</li>
				<li>Logga in</li>
			</ul>
		</div>
	)
}

export default Menu