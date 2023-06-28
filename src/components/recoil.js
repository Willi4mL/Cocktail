import { atom } from "recoil"

export const fetchState = atom({
	key: 'fetchState',
	default: []
})

export const visibleAllCocktails = atom ({
	key: 'VisibleAllCocktails',
	default: false
})

export const clickedMenu = atom ({
	key: 'clickedMenu',
	default: false
})