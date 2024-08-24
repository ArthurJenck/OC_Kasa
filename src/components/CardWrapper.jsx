import "../styles/CardWrapper.scss"
import logements from "../data/logements.json"
import Card from "./Card"

const CardWrapper = () => {
    return (
        <div id="card_wrapper">
            {/* On parcourt les logements pour en extirper les props des Cards */}
            {Array.from(logements).map((logement) => (
                <Card
                    key={logement.id}
                    id={logement.id}
                    name={logement.title}
                    cover={logement.pictures[0]}
                />
            ))}
        </div>
    )
}

export default CardWrapper
