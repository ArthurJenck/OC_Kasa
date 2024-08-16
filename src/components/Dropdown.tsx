import "../styles/Dropdown.scss"
import chevron from "../assets/chevron.svg"
import { useState } from "react"

interface DropdownProps {
    content: { title: string; isList?: boolean; textContent?: string }
}

const Dropdown = ({ content }: DropdownProps) => {
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
                {content.title} <img src={chevron} />
            </button>
            <div className="dropdown-content">
                {content.isList ? null : <p>{content.textContent}</p>}
            </div>
        </div>
    )
}

export default Dropdown
