import logo from "../assets/logo.svg"
import "../styles/Banner.scss"

const Banner = () => {
    return (
        <header>
            <img src={logo} alt="logo" />
            <nav>
                <a href="/">Accueil</a>
                <a href="/About">A Propos</a>
            </nav>
        </header>
    )
}

export default Banner
