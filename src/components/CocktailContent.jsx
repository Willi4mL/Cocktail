import React from "react"
import { fetchState, visibleAllCocktails } from "./recoil"
import { useRecoilState } from "recoil"

const CocktailContent = () => {
	const [drinkData, setDrinkData] = useRecoilState(fetchState)
	const [isCocktail, setIsCocktail] = useRecoilState(visibleAllCocktails)

	if (!drinkData || drinkData.length === 0) {
		return <p>Loading...</p>
	}

	return (
		<>
			{isCocktail && (
				drinkData.map((drink) => (
					<div className='cocktail-card' key={drink.id}>
						<img className='cocktail-card-img' src={drink.image} />
						<h2>{drink.name}</h2>
						<p>Betyg: {drink.rating}</p>
						<p>Antal: {drink.amount}</p>
						<p>Ingredienser: {drink.ingredient}</p>
					</div>
				))
			)}
		</>
	)
}

export default CocktailContent
