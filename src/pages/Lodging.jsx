import "../styles/Lodging.scss"
import SlideShow from "../components/SlideShow"
import Tag from "../components/Tag"
import Host from "../components/Host"
import Ratings from "../components/Rating"
import Dropdown from "../components/Dropdown"

const Lodging = ({ logement }) => {
    document.title = `${logement.title} - ${logement.location}`
    return (
        <main className="lodging">
            <SlideShow logement={logement} />
            <div className="location-and-tags">
                <h2>{logement.title}</h2>
                <p>{logement.location}</p>
                <div className="tags-container">
                    {/* Le map nous permet d'avoir autant de Tag qu'il y en a sur l'élément */}
                    {logement.tags.map((tag, index) => {
                        return <Tag key={`tag-${index}`} tagname={tag} />
                    })}
                </div>
            </div>
            <div className="host-and-rating">
                <Host host={logement.host} />
                <Ratings rating={logement.rating} />
            </div>
            <div className="dropdowns">
                <Dropdown
                    title="Description"
                    textContent={logement.description}
                />
                {/* On précise que ce Dropdown sera une liste, pour modifier la génération de l'élément */}
                <Dropdown
                    title="Équipements"
                    isList
                    listContent={logement.equipments}
                />
            </div>
        </main>
    )
}

export default Lodging
