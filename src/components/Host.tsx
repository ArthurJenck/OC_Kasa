import "../styles/Host.scss"

interface HostProps {
    host: {
        name: string
        picture: string
    }
}

const Host = ({ host }: HostProps) => {
    return (
        <div className="host">
            <p>
                {host.name.split(" ").map((word) => {
                    return <span key={word}>{word}</span>
                })}
            </p>
            <img src={host.picture} alt="photo de profil de l'hôte" />
        </div>
    )
}

export default Host
