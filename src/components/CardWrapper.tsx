import "../styles/CardWrapper.scss"
import logements from "../data/logements.json"
import Card from "./Card"

const CardWrapper = () => {
    return (
        <div id="card_wrapper">
            {Array.from(logements).map((logement) => (
                <Card
                    key={logement.id}
                    name={logement.title}
                    cover={logement.pictures[0]}
                />
            ))}
        </div>
    )
}

export default CardWrapper
