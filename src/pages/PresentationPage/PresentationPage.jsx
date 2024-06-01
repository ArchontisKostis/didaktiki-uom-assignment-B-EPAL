import './PresentationPage.css'
import React from "react";

export default function PresentationPage() {
    return (
        <div className="presentation-page">
            <div style={{
                display: "flex",
                width: "100%",
            }}>
                <a href="/" className="home-btn">
                    <i style={{fontSize: "10vh", alignSelf: "flex-start", color: "var(--green)"}} className="bi bi-house-door"></i>
                </a>
                <h1 style={{textAlign: "center", width: "100%", color: "white", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    ΠΑΡΟΥΣΙΑΣΗ &nbsp;
                    <strong style={{color: "var(--red)"}}>ΜΑΘΗΜΑΤΟΣ</strong>
                </h1>
            </div>

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
        </div>
    )
}