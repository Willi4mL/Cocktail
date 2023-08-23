import React from 'react'
import { useEffect, useRef } from 'react'
import About from "./components/About"
import CocktailContent from "./components/CocktailContent"
import FetchData from "./components/fetch"
import MainPage from "./components/MainPage"
import { clickedAbout, visibleAllCocktails, clickedMenu } from "./components/recoil"
import { useRecoilState } from "recoil"
import Menu from './components/Menu'


function App() {
  const [isAboutClicked, setIsAboutClicked] = useRecoilState(clickedAbout)
  const [isCocktail, setIsCocktail] = useRecoilState(visibleAllCocktails)
  const [isMenuClicked, setIsMenuClicked] = useRecoilState(clickedMenu)
  const aboutRef = useRef(null)
  const cocktailRef = useRef(null)

  useEffect(() => {
    if (isAboutClicked && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    if (isCocktail && cocktailRef.current) {
      cocktailRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [isAboutClicked, isCocktail])

  return (
    <div className="content-container">
      <MainPage />
      <FetchData />
      { isCocktail && !isAboutClicked ? (
        <CocktailContent ref={cocktailRef}/>
      ) : (
        <About ref={aboutRef}/>
      )}
      {isMenuClicked && <Menu />}
    </div>
  )
}

export default App
