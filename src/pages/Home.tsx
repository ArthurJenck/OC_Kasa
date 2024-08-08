import Banner from "../components/Banner"
import { useEffect } from "react"
import "../styles/Home.scss"

function Home() {
    useEffect(() => {
        document.title = "Kasa - Location d'appartements entre particuliers"
    }, [])
    return (
        <>
            <Banner />
        </>
    )
}

export default Home
