'use client'
import getIcon from "../../lib/getIcon"
import { Icon } from "../../lib/types/icon"

interface ButtonProps {
    type: string,
    text: string,
    icon?: Icon,
    callback: () => void,
}

export default function Button({type,text,icon,callback}: ButtonProps) {
    return (
        <button
            onClick={callback}
            className={`btn ${type}`}
        >
            {icon && getIcon(icon)}
            {text}
        </button>
    )
}