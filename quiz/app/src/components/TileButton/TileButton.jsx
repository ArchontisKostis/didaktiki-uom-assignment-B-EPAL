import './TileButton.css'

export default function TileButton({title, icon, color, onClick}) {
    return (
        <button
            className="tile-button"
            onClick={onClick}
            style={{backgroundColor: color}}
        >
            <i className="bi bi-patch-question"></i>
            <span> {title}</span>
        </button>
    )
}