import "../styles/About.scss"
import Banner from "../components/Banner"
import Dropdown from "../components/Dropdown"

// Le contenu des composants Dropdowns de la page About sont rédigés dans cet array. On remarque que deux sont similaires, peut-être une erreur de maquette ?
const aboutDropdowns = [
    {
        title: "Fiabilité",
        textContent:
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
        title: "Respect",
        textContent:
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
        title: "Service",
        textContent:
            "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.",
    },
    {
        title: "Sécurité",
        textContent:
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
]

const About = () => {
    document.title = "À propos de Kasa"
    return (
        <main className="about">
            <Banner />
            {aboutDropdowns.map((dropdown, index) => {
                return (
                    <Dropdown
                        key={`about-dropdown-${index}`}
                        title={dropdown.title}
                        textContent={dropdown.textContent}
                    />
                )
            })}
        </main>
    )
}

export default About
