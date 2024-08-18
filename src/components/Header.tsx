import logo from "../assets/logo.svg"
import "../styles/Header.scss"
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <h1>
                <NavLink to="/">
                    <img src={logo} alt="logo" />
                </NavLink>
            </h1>
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
