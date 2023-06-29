import React from 'react'
import Header from './Header'
import Menu from './Menu'
import { clickedMenu } from "./recoil"
import { useRecoilState } from "recoil"
import heroCoke from '../../images/hero-coke.png'

const MainPage = () => {
	const [isMenuClicked, setIsMenuClicked] = useRecoilState(clickedMenu)	

	return (
		<div className='hero-page'>
			<Header />
			{isMenuClicked && <Menu />}
				<section className='main-content-container'>
					<img className='hero-picture' src={heroCoke} alt='hero picture'></img>
					<p className='first-paragraph'>Välkommen till vår hemsida, en plats där kunskap och kreativitet möts i en perfekt symbios. Vi är stolta över att erbjuda dig en unik upplevelse som kombinerar gamla klassiker med nya och spännande drinkar. Oavsett om du är en erfaren bartenderska eller en nyfiken amatör, kommer du att hitta inspiration och nya kunskaper här.</p>
				</section>
		</div>
	)
}

export default MainPage