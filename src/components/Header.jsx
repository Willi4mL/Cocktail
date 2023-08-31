import React from "react"
import { clickedMenu, screenSizeState } from "./recoil"
import { useRecoilState } from "recoil"
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { clickedAbout, visibleAllCocktails } from "./recoil"
import { useEffect, useRef } from "react"

const Header = () => {
	const [isMenuClicked, setIsMenuClicked] = useRecoilState(clickedMenu)
	const [isResize, setIsResize] = useRecoilState(screenSizeState)
	const [isAboutClicked, setIsAboutClicked] = useRecoilState(clickedAbout)
	const [isCocktail, setIsCocktail] = useRecoilState(visibleAllCocktails)

	const handleMenuClick = () => {
		setIsAboutClicked(false)
		setIsCocktail(false)
		setIsMenuClicked(!isMenuClicked)
	}

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

	return (
		<>
			<nav className='header-menu'>
			
				<h1 className="heading">Dryckes listan</h1>
				{!isResize &&
					<p className='burger-menu' onClick={handleMenuClick} ref={menuRef}> <HiOutlineMenuAlt3 /> </p>
				}
			</nav>
		</>
	)
}

export default Header