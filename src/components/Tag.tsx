import "../styles/Tag.scss"

const Tag = ({ tagname }: { tagname: string }) => {
    return (
        <p className="location-tag">
            {tagname.length > 12 ? tagname.substring(0, 10) + "..." : tagname}
        </p>
    )
}

export default Tag
