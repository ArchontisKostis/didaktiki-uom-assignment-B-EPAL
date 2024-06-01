import './TileButton.css'

export default function TileButton({title, icon, color, onClick}) {
    return (
        <a
            className="tile-button"
            onClick={onClick}
            style={{backgroundColor: color}}
        >
            <i className={icon}></i>
            <span>{title}</span>
        </a>
    )
}