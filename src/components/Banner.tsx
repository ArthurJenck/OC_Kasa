import "../styles/Banner.scss"

type BannerProps = {
    isHomeBanner?: boolean
}

const Banner = ({ isHomeBanner }: BannerProps) => {
    return (
        <div className={isHomeBanner ? "banner home-banner" : "banner"}>
            {isHomeBanner ? (
                <h2>
                    <span>Chez vous,&nbsp;</span>partout et ailleurs
                </h2>
            ) : null}
        </div>
    )
}

export default Banner
