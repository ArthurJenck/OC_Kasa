import "../styles/Footer.scss"
import logo from "../assets/logo.svg"

const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="Logo de Kasa" />
            <h2>© 2020 Kasa. All rights reserved</h2>
        </footer>
    )
}

export default Footer
