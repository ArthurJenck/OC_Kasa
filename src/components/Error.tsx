import { useEffect } from "react"
import { NavLink } from "react-router-dom"
import "../styles/Error.scss"

const Error = () => {
    useEffect(() => {
        document.title = "Erreur 404"
    }, [])
    return (
        <section className="error-404">
            <h2>404</h2>
            <p>
                <span>Oups! La page que </span>vous demandez n'existe pas.
            </p>
            <NavLink to="/">Retourner sur la page d'accueil</NavLink>
        </section>
    )
}

export default Error
