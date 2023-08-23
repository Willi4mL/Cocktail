import React from "react"
import { clickedMenu, screenSizeState } from "./recoil"
import { useRecoilState } from "recoil"
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

const Header = () => {
	const [isMenuClicked, setIsMenuClicked] = useRecoilState(clickedMenu)
	const [isResize, setIsResize] = useRecoilState(screenSizeState)

	const handleMenuClick = () => {
		setIsAboutClicked(false);
		setIsCocktail(false);
		setIsMenuClicked(!isMenuClicked);
	  };

	return (
		<>
			<nav className='header-menu'>
				<h1 className="heading">Dryckes listan</h1>
				{!isResize && <p className='burger-menu' onClick={handleMenuClick}> <HiOutlineMenuAlt3 /> </p>}
			</nav>
		</>
	)
}

export default Header