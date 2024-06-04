import './WrongQuestionsPage.css'
import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

export default function WrongQuestionsPage() {
    const incorrectQuestions = JSON.parse(localStorage.getItem('incorrectQuestions')) || [];
    
    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [deletingHistory, setDeletingHistory] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteHistoryConfirmed = () => {
        setDeletingHistory(true);
        setShowAlert(true);

        // Wait 2 seconds before deleting the history
        setTimeout(() => {
            localStorage.removeItem('incorrectQuestions');
            setDeletingHistory(false);
            handleClose();
            window.location.reload();
        }, 2000);
    }

    return (
        <div className="wrong-questions-page">
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <i className="bi bi-trash"> </i>
                        Διαγραφή Ιστορικού
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Είστε σίγουρος ότι θέλετε να διαγράψετε το ιστορικό των λάθος απαντήσεων; <br />
                    <strong>Αυτή η ενέργεια δεν μπορεί να αναιρεθεί.</strong> <br /> 

                    {deletingHistory &&
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1vw",
                        padding: "1vw 0"
                    
                    }}>
                        <Spinner animation="border" role="status">

                        </Spinner>
                        Το ιστορικό διαγράφεται...
                    </div>
                    }

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {
                        handleClose();
                    }}>
                        <i className="bi bi-x"> </i>
                        Όχι
                    </Button>

                    <Button variant="danger"
                        onClick={() => {
                            deleteHistoryConfirmed();
                        }}
                    >
                        <i className="bi bi-trash"> </i>   
                        Διαγραφή Ιστορικού
                    </Button>
                </Modal.Footer>
            </Modal>

            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "80%",
                marginTop: "10vh"
            }}>
                <a href="/" className="home-btn">
                    <i style={{fontSize: "10vh", alignSelf: "flex-start", color: "var(--green)"}} className="bi bi-house-door"></i>
                </a>
                <h1 style={{textAlign: "center", width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    ΛΑΘΟΣ &nbsp;
                    <strong style={{color: "var(--red)"}}>ΑΠΑΝΤΗΣΕΙΣ</strong>
                </h1>
            </div>

            {incorrectQuestions.length === 0 &&
                <div className="no-wrong-questions">
                    <h3>Δεν υπάρχουν λάθη</h3>
                    <p>
                        Κάντε το quiz και αν δεν απαντήσετε σωστά σε κάποια ερώτηση, θα εμφανίστεί εδώ. <br />
                        Μολις ξανακάνετε το quiz, αυτή η σελίδα θα αντικατασταθεί με τις νέες λάθος απαντήσεις.
                    </p>
                </div>
            }

            <div className="wrong-questions-list">
                {incorrectQuestions.map((question, index) => (
                    <div key={index} className="wrong-question">
                        <h3>{question.question}</h3>
                        <p>
                            Σωστή απάντηση: &nbsp;
                            <b>{question.possibleAnswers[question.correctAnswerIndex]}</b>
                        </p>
                    </div>
                ))}

                
                    <button
                        className="delete-history-button"
                        onClick={() => handleShow()}
                        disabled={incorrectQuestions.length === 0}
                    >
                        <i className="bi bi-trash"> </i>
                        Διαγραφή Ιστορικού
                    </button>

                    <button
                        className="delete-history-button"
                        onClick={() => window.location.href = '/quiz'}
                    >
                        <i className="bi bi-arrow-bar-right"> </i>
                        Κάντε το Quiz!
                    </button>
    
            </div>


        </div>
    )
}