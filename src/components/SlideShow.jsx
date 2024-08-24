import { useState } from "react"
import "../styles/SlideShow.scss"
import ImgChevron from "../assets/lodging_img_chevron.svg"

const SlideShow = ({ logement }) => {
    // Le useState identifie l'image actuellement sélectionnée dans l'array de la propriété pictures
    const [currentId, setCurrentId] = useState(0)

    const prevImg = () => {
        // La propriété picWidth équivaut à la taille du conteneur d'image visible, cela nous servira à actualiser la valeur du scroll selon la taille d'écran pour le responsive
        const picWidth = document.querySelector(".pic-viewer").clientWidth
        switch (currentId) {
            // Si l'image sélectionnée est la première de l'array pictures, le bouton prevImg doit amener à la dernière image de l'array
            case 0:
                document
                    .querySelector(".pic-viewer")
                    ?.scroll(picWidth * logement.pictures.length - 1, 213)
                break
            // Sinon, on calcule le scroll à afficher en multipliant la largeur d'image affichée par l'index du tableau actuellement affiché. 1x = Passer à la 1ère image, 2x = passer à la 2ème, etc...
            default:
                document
                    .querySelector(".pic-viewer")
                    ?.scroll(picWidth * (currentId - 1), 213)
                break
        }
        // Et on met à jour le useState
        return currentId === 0
            ? setCurrentId(logement.pictures.length - 1)
            : setCurrentId(currentId - 1)
    }

    const nextImg = () => {
        const picWidth = document.querySelector(".pic-viewer").clientWidth

        switch (currentId) {
            // Idem pour le bouton nextImg, si l'image sélectionnée est la toute dernière, il faut repasser à la première de l'array
            case logement.pictures.length - 1:
                document.querySelector(".pic-viewer")?.scroll(0, 213)
                break
            default:
                // Sinon, on calcule le prochain scroll à atteindre
                document
                    .querySelector(".pic-viewer")
                    ?.scroll(picWidth * (currentId + 1), 213)
                break
        }
        return currentId === logement.pictures.length - 1
            ? setCurrentId(0)
            : setCurrentId(currentId + 1)
    }

    return (
        <div className="slide-show">
            <div className="pic-viewer">
                {/* Toutes les images de l'array sont déjà affichées, puis cachées en overflow hidden */}
                {logement.pictures.map((picture, index) => {
                    return <img key={`picture-${index}`} src={picture} />
                })}
            </div>
            {/* S'il y a plusieurs images dans l'array picture, on affiche les boutons de slide */}
            {logement.pictures.length > 1 ? (
                <>
                    <img
                        src={ImgChevron}
                        alt="image précédente"
                        className="cover-btn prev-btn"
                        onClick={() => prevImg()}
                    />
                    <img
                        src={ImgChevron}
                        alt="image suivante"
                        className="cover-btn next-btn"
                        onClick={() => nextImg()}
                    />
                    {/* Le compteur d'image affichée se sert du useState */}
                    <p className="cover-num">
                        {currentId + 1}/{logement.pictures.length}
                    </p>
                </>
            ) : (
                ""
            )}
        </div>
    )
}

export default SlideShow
