import { useRecoilState } from "recoil"
import { fetchState } from "./recoil"
import { useEffect } from "react"

const FetchData = () => {
	const [drinkData, setDrinkData] = useRecoilState(fetchState)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('/api/alldata')
				const data = await response.json()
				setDrinkData(data)
			} catch (error) {
				console.log('Could not fetch data' + error.message);
			}
		}
		fetchData()
	}, [])

	return null
}

export default FetchData