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

				<p>Vårt mål är att vara din främsta resurs för allt som rör drycker och mixologi. Vi har samlat en omfattande samling av traditionella och moderna recept på vår hemsida, så oavsett om du är sugen på en klassisk martini eller vill prova på den senaste trenden inom mixologi, kommer du att hitta allt du behöver här.</p>


				<p className='second-paragraph'>Kreativitet är också en viktig del av vår vision. Vi uppmuntrar våra besökare att utforska och experimentera med egna drinkskapelser. Vi delar regelbundet spännande och unika recept som inspirerar till att tänja på gränserna och skapa något nytt. Oavsett om det är en innovativ twist på en klassiker eller en helt ny kombination av smaker, vill vi hjälpa dig att hitta din egen unika stil.</p>


				<p className='third-paragraph'>Vi tror också på att hedra och bevara gamla klassiker. På vår hemsida hittar du detaljerade beskrivningar och instruktioner för att skapa de mest älskade drinkarna genom tiderna. Vi vill föra vidare den rika historia och tradition som finns inom mixologi och ge dig möjlighet att uppleva tidlösa smaker och uppskatta de drycker som har stått sig över generationer.</p>


				<p className='fourth-praragraph'>Oavsett om du är intresserad av att lära dig mer, bli inspirerad eller helt enkelt hitta det perfekta receptet för kvällen, så är vår hemsida platsen för dig. Utforska vårt arkiv, ta del av våra artiklar och recept, och låt din kreativitet flöda. Vi är glada att kunna erbjuda en plattform där kunskap, kreativitet, gamla klassiker och nya drinkar kan mötas och skapa en härlig upplevelse för dig och dina vänner. Skål!</p>
			</section>
		</div>
	)
}

export default MainPage