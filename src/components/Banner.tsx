import "../styles/Banner.scss"

type BannerProps = {
    isHomeBanner?: boolean
    bg: string
}

const Banner = ({ isHomeBanner, bg }: BannerProps) => {
    return (
        <div
            className="banner"
            style={
                isHomeBanner
                    ? {
                          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${bg}")`,
                      }
                    : {
                          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("${bg}")`,
                      }
            }
        >
            {isHomeBanner ? (
                <h2>
                    <span>Chez vous,&nbsp;</span>partout et ailleurs
                </h2>
            ) : null}
        </div>
    )
}

export default Banner
