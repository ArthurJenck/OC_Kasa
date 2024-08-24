import "../styles/Card.scss"
import { NavLink } from "react-router-dom"

const Card = ({ id, name, cover }) => {
    return (
        // Les URLs des propriétés sont générées avec leur id et leur titre
        <NavLink
            to={`/${id}-${name
                .toString()
                .toLowerCase()
                .replace(/ /g, "-")
                .replace("---", "-")}`}
            className="card"
            style={{
                // Le prop cover nous sert à ajouter dans le style la bonne image de couverture
                backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(10, 10, 10, 0) 42%, rgba(4, 4, 4, 0.205) 99.99%, rgba(0, 0, 0, 0.5) 100%), url("${cover}")`,
            }}
        >
            <h2>{name}</h2>
        </NavLink>
    )
}

export default Card
