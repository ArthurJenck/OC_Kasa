import "../styles/Card.scss"
import { NavLink } from "react-router-dom"

type CardProps = {
    id: string
    name: string
    cover: string
}

const Card = ({ id, name, cover }: CardProps) => {
    return (
        <NavLink
            to={`/${id}-${name
                .toLowerCase()
                .replace(/ /g, "-")
                .replace("---", "-")}`}
            className="card"
            style={{ backgroundImage: `url(${cover})` }}
        >
            <h2>{name}</h2>
        </NavLink>
    )
}

export default Card
