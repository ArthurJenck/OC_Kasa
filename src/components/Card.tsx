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
            style={{
                backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(10, 10, 10, 0) 42%, rgba(4, 4, 4, 0.205) 99.99%, rgba(0, 0, 0, 0.5) 100%), url("${cover}")`,
            }}
        >
            <h2>{name}</h2>
        </NavLink>
    )
}

export default Card
