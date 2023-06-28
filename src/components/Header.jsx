import React from "react"
import { clickedMenu } from "./recoil"
import { useRecoilState } from "recoil"
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

const Header = () => {
	const [isMenuClicked, setIsMenuClicked] = useRecoilState(clickedMenu)

	return (
		<>
		<nav className='header-menu'>
				<h1 className="heading">Dryckes listan</h1>
				<p className='burger-menu' onClick={() => setIsMenuClicked(!isMenuClicked)}> <HiOutlineMenuAlt3 /> </p>
			</nav>
		</>
	)
}

export default Header