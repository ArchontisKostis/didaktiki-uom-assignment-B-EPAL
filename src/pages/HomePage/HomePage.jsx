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
                    icon="bi bi-patch-question"
                    color="var(--red)"
                    onClick={() => window.location.href = "/quiz"}
                />

                <TileButton
                    title="Λάθος Απαντήσεις"
                    icon="bi bi-x-octagon"
                    color="var(--green)"
                    onClick={() => window.location.href = "/wrong-questions"}
                />

                <TileButton
                    title="Online Παρουσίαση"
                    icon="bi bi-easel2"
                    color="white"
                    onClick={() => window.location.href = "/presentation"}
                />

                <TileButton
                    title="Θεωρία"
                    icon="bi bi-book"
                    color="var(--red)"
                    onClick={() => window.location.href = "/theory"}
                />
            </section>

        </div>
    )
}