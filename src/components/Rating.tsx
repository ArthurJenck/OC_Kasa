import "../styles/Rating.scss"
import starIcon from "../assets/star-icon.svg"

const Ratings = ({ rating }: { rating: string }) => {
    const ratingArr = []
    for (let i = 0; i < 5; i++) {
        if (i < parseInt(rating)) {
            ratingArr.push(true)
        } else {
            ratingArr.push(false)
        }
    }

    return (
        <div className="rating-container">
            {ratingArr.map((ratingPoint, index) =>
                ratingPoint ? (
                    <img
                        src={starIcon}
                        key={`star-${index}`}
                        className="active-rating"
                    />
                ) : (
                    <img src={starIcon} key={`star-${index}`} />
                )
            )}
        </div>
    )
}

export default Ratings
