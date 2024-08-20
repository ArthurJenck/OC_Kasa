import "../styles/Lodging.scss"
import SlideShow from "../components/SlideShow"
import Tag from "../components/Tag"
import Host from "../components/Host"
import Ratings from "../components/Rating"
import Dropdown from "../components/Dropdown"

interface LodgingProps {
    logement: {
        description: string
        equipments: string[]
        host: {
            name: string
            picture: string
        }
        location: string
        pictures: string[]
        rating: string
        tags: string[]
        title: string
    }
}

const Lodging = ({ logement }: LodgingProps) => {
    document.title = `${logement.title} - ${logement.location}`
    return (
        <main className="lodging">
            <SlideShow logement={logement} />
            <div className="location-and-tags">
                <h2>{logement.title}</h2>
                <p className="location"></p>
                {logement.tags.map((tag, index) => {
                    return <Tag key={`tag-${index}`} tagname={tag} />
                })}
            </div>
            <div className="host-and-rating">
                <Host host={logement.host} />
                <Ratings rating={logement.rating} />
            </div>
            <Dropdown title="Description" textContent={logement.description} />
            <Dropdown
                title="Équipements"
                isList
                listContent={logement.equipments}
            />
        </main>
    )
}

export default Lodging
