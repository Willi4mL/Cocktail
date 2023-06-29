import About from "./components/About"
import CocktailContent from "./components/CocktailContent"
import FetchData from "./components/fetch"
import MainPage from "./components/MainPage"
import { clickedAbout, visibleAllCocktails } from "./components/recoil"
import { useRecoilState } from "recoil"

function App() {
  const [isAboutClicked, setIsAboutClicked] = useRecoilState(clickedAbout)
  const [isCocktail, setIsCocktail] = useRecoilState(visibleAllCocktails)

  return (
    <div className="content-container">
      <MainPage />
      <FetchData />
      { isCocktail && !isAboutClicked ? (
        <CocktailContent />
      ) : (
        <About />
      )}
    </div>
  )
}

export default App
