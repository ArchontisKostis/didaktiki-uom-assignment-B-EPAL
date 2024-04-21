import './PresentationPage.css'

export default function PresentationPage() {
    return (
        <div className="presentation-page">
            <iframe
                src="https://docs.google.com/presentation/d/e/2PACX-1vRxaKummjz2ncVFZPKbTrZi9TW77gVYdBGrqUmAuK7BU9vtri3fPWjNUGH3Zfx1MAguynGlnu9k1f9n/embed?start=false&loop=false&delayms=3000"
                frameBorder="0"
                width="960"
                height="569"
                allowFullScreen="true"
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
            ></iframe>

            <a href="https://docs.google.com/presentation/d/e/2PACX-1vRxaKummjz2ncVFZPKbTrZi9TW77gVYdBGrqUmAuK7BU9vtri3fPWjNUGH3Zfx1MAguynGlnu9k1f9n/embed?start=false&loop=false&delayms=3000"
               className="presentation-link"
               target="_blank"
               rel={"noreferrer"}
            >
                <i className="bi bi-box-arrow-up-right"> </i>
                Άνοιγμα σε νέα καρτέλα
            </a>

            <a href="/" className="back-button"
                style={{
                    color: "white",
                    backgroundColor: "var(--red)",
                    padding: "0.5em"
            }}
            >
                <i className="bi bi-house-fill"></i>
                Αρχική Σελίδα
            </a>

        </div>
    )
}