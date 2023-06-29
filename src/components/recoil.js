import { atom } from "recoil"

export const fetchState = atom({
	key: 'fetchState',
	default: []
})

export const visibleAllCocktails = atom ({
	key: 'VisibleAllCocktails',
	default: true
})

export const clickedMenu = atom ({
	key: 'clickedMenu',
	default: false
})

export const clickedAbout = atom ({
	key: 'clickedAbout',
	default: false
})

export const screenSizeState = atom ({
	key: 'screenSizeState',
	default: null
})