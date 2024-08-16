import "../styles/Card.scss"

type CardProps = {
    name: string
    cover: string
}

const Card = ({ name, cover }: CardProps) => {
    return (
        <div className="card" style={{ backgroundImage: `url(${cover})` }}>
            <h2>{name}</h2>
        </div>
    )
}

export default Card
