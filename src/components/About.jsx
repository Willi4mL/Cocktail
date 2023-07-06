import React from 'react'
import champagne from '../../images/champagne.png'
import bartender from '../../images/bartender.png'

function About() {
	return (
		<div className='about-container'>
			<h3 className='about-heading'>Om oss</h3>
			<img className='bartender' src={bartender} alt='bartender' />
			<article className='paragraph-container'>
				<span className='about-paragraph'><h4 className='about-subheading'>Vårat mål</h4>Vårt mål är att vara din främsta resurs för allt som rör drycker och mixologi. Vi har samlat en omfattande samling av traditionella och moderna recept på vår hemsida, så oavsett om du är sugen på en klassisk martini eller vill prova på den senaste trenden inom mixologi, kommer du att hitta allt du behöver här.</span>


				<span className='about-paragraph'><h4 className='about-subheading'>Vision</h4>Kreativitet är också en viktig del av vår vision. Vi uppmuntrar våra besökare att utforska och experimentera med egna drinkskapelser. Vi delar regelbundet spännande och unika recept som inspirerar till att tänja på gränserna och skapa något nytt. Oavsett om det är en innovativ twist på en klassiker eller en helt ny kombination av smaker, vill vi hjälpa dig att hitta din egen unika stil.</span>

				<span className='about-paragraph'><h4 className='about-subheading'>Bevarande</h4>Vi tror också på att hedra och bevara gamla klassiker. På vår hemsida hittar du detaljerade beskrivningar och instruktioner för att skapa de mest älskade drinkarna genom tiderna. Vi vill föra vidare den rika historia och tradition som finns inom mixologi och ge dig möjlighet att uppleva tidlösa smaker och uppskatta de drycker som har stått sig över generationer.</span>


				<span className='about-paragraph'><h4 className='about-subheading'>Utforska</h4>Oavsett om du är intresserad av att lära dig mer, bli inspirerad eller helt enkelt hitta det perfekta receptet för kvällen, så är vår hemsida platsen för dig. Utforska vårt arkiv, ta del av våra artiklar och recept, och låt din kreativitet flöda. Vi är glada att kunna erbjuda en plattform där kunskap, kreativitet, gamla klassiker och nya drinkar kan mötas och skapa en härlig upplevelse för dig och dina vänner. Skål!</span>
			</article>
			<img className='champagne-bottle' src={champagne} alt='champagne bottle' />
		</div>
	)
}

export default About