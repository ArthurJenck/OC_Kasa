import logo from "../assets/logo.svg"
import "../styles/Header.scss"
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo" />
            <nav>
                <NavLink
                    to="/"
                    className={(props) => (props.isActive ? "active" : "")}
                >
                    Accueil
                </NavLink>
                <NavLink to="/about">A Propos</NavLink>
            </nav>
        </header>
    )
}

export default Header
