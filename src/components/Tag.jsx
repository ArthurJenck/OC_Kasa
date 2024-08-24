import "../styles/Tag.scss"

const Tag = ({ tagname }) => {
    return (
        <p className="location-tag">
            {/* S'il y a plus de 12 caractères dans le tag, il sera trop grand pour la taille souhaitée. On remplacera les derniers caractères par ... */}
            {tagname.length > 12 ? tagname.substring(0, 10) + "..." : tagname}
        </p>
    )
}

export default Tag
