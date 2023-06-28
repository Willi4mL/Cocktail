import CocktailContent from "./components/CocktailContent"
import FetchData from "./components/fetch"
import Header from "./components/Header"
import MainPage from "./components/MainPage"

function App() {

  return (
    <div>
      <MainPage />
      <FetchData />
      <CocktailContent />
    </div>
  )
}

export default App
