import { useEffect } from "react"
import "../styles/Home.scss"
import Header from "../components/Header"
import Banner from "../components/Banner"
import CardWrapper from "../components/CardWrapper"
import Footer from "../components/Footer"

function Home() {
    useEffect(() => {
        document.title = "Kasa - Location d'appartements entre particuliers"
    }, [])
    return (
        <>
            <Header />
            <Banner />
            <CardWrapper />
            <Footer />
        </>
    )
}

export default Home
