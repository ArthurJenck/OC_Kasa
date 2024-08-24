import "../styles/Rating.scss"
import starIcon from "../assets/star-icon.svg"

const Ratings = ({ rating }) => {
    // On transforme le string rating en un tableau de booléens en adéquation avec le nombre d'étoiles à mettre
    const ratingArr = []
    for (let i = 0; i < 5; i++) {
        if (i < parseInt(rating)) {
            ratingArr.push(true)
        } else {
            // Quand toutes la note est atteinte, chaque rating suivant passe en false
            ratingArr.push(false)
        }
    }

    return (
        <div className="rating-container">
            {ratingArr.map((ratingPoint, index) =>
                // Si le booléen ratingPoint est true, l'étoile est passée comme active
                ratingPoint ? (
                    <img
                        src={starIcon}
                        key={`star-${index}`}
                        className="active-rating"
                    />
                ) : (
                    // Sinon, c'est une simple étoile grise
                    <img src={starIcon} key={`star-${index}`} />
                )
            )}
        </div>
    )
}

export default Ratings
