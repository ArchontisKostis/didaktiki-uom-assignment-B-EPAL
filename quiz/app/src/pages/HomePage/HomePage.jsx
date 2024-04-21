import './HomePage.css'
import TileButton from "../../components/TileButton/TileButton.jsx";

export default function HomePage() {
    return (
        <div className="home-page">
            <header className="home-header">
                <h1>ΑΠΟ ΤΟΝ ΑΛΓΟΡΙΘΜΟ ΣΤΗΝ</h1>
                <h2>ΑΝΑΠΤΥΞΗ ΠΡΟΓΡΑΜΜΑΤΟΣ</h2>
            </header>

            <section className="home-content">
                <TileButton
                    title="Quiz"
                    icon="/algorithm.svg"
                    color="var(--red)"
                    onClick={() => window.location.href = "/quiz"}
                />
            </section>
        </div>
    )
}