import React from 'react'
import { useRecoilState } from 'recoil'
import { visibleAllCocktails } from './recoil'

function Menu() {
	const [isCocktail, setIsCocktail] = useRecoilState(visibleAllCocktails)

	return (
		<div className='menu-container'>
			<ul>
				<li onClick={() => setIsCocktail(!isCocktail)}>Visa alla drinkar</li>
				<li>Om oss</li>
				<li>Logga in</li>
			</ul>
		</div>
	)
}

export default Menu