import "../styles/Dropdown.scss"
import chevron from "../assets/chevron.svg"
import { useState } from "react"

const Dropdown = ({ title, isList, textContent, listContent }) => {
    // Le useState vérifie si l'élément déroulant est ouvert ou fermé
    const [isOpen, setIsOpen] = useState(false)
    // S'il est ouvert, une class "open" est ajoutée à l'élément
    const isOpenClass = isOpen ? " open" : ""

    return (
        // La class est ajoutée ici
        <div className={`dropdown${isOpenClass}`}>
            <button
                // Quand on clique sur le bouton d'ouverture/fermeture, l'état du composant change et toggle la class open par la même occasion
                className="dropdown-button"
                onClick={() => {
                    setIsOpen(!isOpen)
                }}
            >
                {title} <img src={chevron} alt="ouvrir le contenu déroulant" />
            </button>
            <div className="dropdown-content">
                {isList ? (
                    <ul>
                        {/* Si le contenu de l'élement a été défini comme une liste, on crée une liste non-ordonnée avec chaque élément (utile pour les pages de propriété avec les équipements) */}
                        {listContent?.map((listElem) => (
                            <li key={listElem}>{listElem}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{textContent}</p>
                )}
            </div>
        </div>
    )
}

export default Dropdown
