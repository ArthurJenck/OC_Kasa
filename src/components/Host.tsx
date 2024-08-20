interface HostProps {
    host: {
        name: string
        picture: string
    }
}

const Host = ({ host }: HostProps) => {
    return (
        <div className="host">
            <p className="host-name">{host.name}</p>
            <img src={host.picture} alt="photo de profil de l'hôte" />
        </div>
    )
}

export default Host
