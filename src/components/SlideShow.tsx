import { useState } from "react"
import "../styles/SlideShow.scss"
import ImgChevron from "../assets/lodging_img_chevron.svg"

interface LodgingProps {
    logement: { title: string; pictures: string[] }
}

const SlideShow = ({ logement }: LodgingProps) => {
    const [currentId, setCurrentId] = useState(0)

    const prevImg = () => {
        const picWidth = document.querySelector(".pic-viewer")!.clientWidth
        switch (currentId) {
            case 0:
                document.querySelector(".pic-viewer")?.scroll(picWidth * 4, 213)
                break
            case 1:
                document.querySelector(".pic-viewer")?.scroll(0, 213)
                break
            case 2:
                document.querySelector(".pic-viewer")?.scroll(picWidth, 213)
                break
            case 3:
                document.querySelector(".pic-viewer")?.scroll(picWidth * 2, 213)
                break
            case 4:
                document.querySelector(".pic-viewer")?.scroll(picWidth * 3, 213)
                break
            default:
                document.querySelector(".pic-viewer")?.scroll(0, 213)
                break
        }

        return currentId === 0
            ? setCurrentId(logement.pictures.length - 1)
            : setCurrentId(currentId - 1)
    }

    const nextImg = () => {
        const picWidth = document.querySelector(".pic-viewer")!.clientWidth

        switch (currentId) {
            case 0:
                document.querySelector(".pic-viewer")?.scroll(picWidth, 213)
                break
            case 1:
                document.querySelector(".pic-viewer")?.scroll(picWidth * 2, 213)
                break
            case 2:
                document.querySelector(".pic-viewer")?.scroll(picWidth * 3, 213)
                break
            case 3:
                document.querySelector(".pic-viewer")?.scroll(picWidth * 4, 213)
                break
            case 4:
                document.querySelector(".pic-viewer")?.scroll(0, 213)
                break
            default:
                document.querySelector(".pic-viewer")?.scroll(0, 213)
                break
        }

        return currentId === logement.pictures.length - 1
            ? setCurrentId(0)
            : setCurrentId(currentId + 1)
    }

    return (
        <div className="slide-show">
            <div className="pic-viewer">
                {logement.pictures.map((picture, index) => {
                    return (
                        <img
                            key={`picture-${index}`}
                            src={picture}
                            className={`picture-${index + 1}`}
                        />
                    )
                })}
            </div>
            {logement.pictures.length > 1 ? (
                <>
                    <a
                        href={`#picture-${currentId - 1}`}
                        onClick={() => prevImg()}
                    >
                        <img
                            src={ImgChevron}
                            alt="image précédente"
                            className="cover-btn prev-btn"
                        />
                    </a>
                    <a
                        href={`#picture-${currentId + 1}`}
                        onClick={() => nextImg()}
                    >
                        <img
                            src={ImgChevron}
                            alt="image suivante"
                            className="cover-btn next-btn"
                        />
                    </a>
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
