import "../styles/Host.scss"

const Host = ({ host }) => {
    return (
        <div className="host">
            <p>
                {/* Les nom et prénom sont affichés l'un en-dessous de l'autre, on va donc les mettre chacun dans des span qui auront la propriété display: block */}
                {host.name.split(" ").map((word) => {
                    return <span key={word}>{word}</span>
                })}
            </p>
            <img src={host.picture} alt="photo de profil de l'hôte" />
        </div>
    )
}

export default Host
