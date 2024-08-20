import "../styles/Banner.scss"

type BannerProps = {
    isHomeBanner?: boolean
}

const Banner = ({ isHomeBanner }: BannerProps) => {
    return (
        // Si la bannière vient de la page d'accueil, certains styles spéciaux s'appliquent
        <div className={isHomeBanner ? "banner home-banner" : "banner"}>
            {isHomeBanner ? (
                <h2>
                    {/* En responsive, on aura besoin de séparer les deux bouts de phrase */}
                    <span>Chez vous,&nbsp;</span>partout et ailleurs
                </h2>
            ) : null}
        </div>
    )
}

export default Banner
