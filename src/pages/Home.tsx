import "../styles/Home.scss"
import Banner from "../components/Banner"
import CardWrapper from "../components/CardWrapper"

function Home() {
    document.title = "Kasa - Location d'appartements entre particuliers"
    return (
        <main className="home">
            <Banner isHomeBanner />
            <CardWrapper />
        </main>
    )
}

export default Home
