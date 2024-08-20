import "../styles/Dropdown.scss"
import chevron from "../assets/chevron.svg"
import { useState } from "react"

interface DropdownProps {
    title: string
    isList?: boolean
    textContent?: string
    listContent?: string[]
}

const Dropdown = ({
    title,
    isList,
    textContent,
    listContent,
}: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const isOpenClass = isOpen ? " open" : ""

    return (
        <div className={`dropdown${isOpenClass}`}>
            <button
                className="dropdown-button"
                onClick={() => {
                    setIsOpen(!isOpen)
                }}
            >
                {title} <img src={chevron} />
            </button>
            <div className="dropdown-content">
                {isList ? (
                    <ul>
                        {listContent?.map((listElem) => (
                            <li key={listElem}>{listElem}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{textContent}</p>
                )}
            </div>
        </div>
    )
}

export default Dropdown
