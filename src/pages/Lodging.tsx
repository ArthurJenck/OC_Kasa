import { useState, useEffect } from "react"
import "../styles/Lodging.scss"
import ImgChevron from "../assets/lodging_img_chevron.svg"

interface LodgingProps {
    logement: { title: string; location: string; pictures: string[] }
}

const Lodging = ({ logement }: LodgingProps) => {
    useEffect(() => {
        document.title = `${logement.title} - ${logement.location}`
    })

    const [currentId, setCurrentId] = useState(0)

    const prevImg = () => {
        return currentId === 0
            ? setCurrentId(logement.pictures.length - 1)
            : setCurrentId(currentId - 1)
    }

    const nextImg = () => {
        return currentId === logement.pictures.length - 1
            ? setCurrentId(0)
            : setCurrentId(currentId + 1)
    }

    return (
        <main className="lodging">
            <div className="cover-container">
                <img
                    src={logement.pictures[currentId]}
                    alt="image du logement"
                />
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
                        <p className="cover-num">
                            {currentId + 1}/{logement.pictures.length}
                        </p>
                    </>
                ) : (
                    ""
                )}
            </div>
            <h2>{logement.title}</h2>
        </main>
    )
}

export default Lodging
