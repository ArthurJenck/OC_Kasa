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
            <Banner isHomeBanner bg="/src/assets/home_banner_bg.jpg" />
            <CardWrapper />
            <Footer />
        </>
    )
}

export default Home
