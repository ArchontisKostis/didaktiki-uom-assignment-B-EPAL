import './WrongQuestionsPage.css'

export default function WrongQuestionsPage() {
    const incorrectQuestions = JSON.parse(localStorage.getItem('incorrectQuestions')) || [];

    const deleteHistory = () => {
        // Ask the user if they are sure they want to delete the history
        const confirmDelete = window.confirm('Είστε σίγουρος ότι θέλετε να διαγράψετε το ιστορικό;');
        if (confirmDelete) {
            localStorage.removeItem('incorrectQuestions');
            window.location.reload();

            alert('Το ιστορικό διαγράφηκε')
            return;
        }

        alert('Το ιστορικό δεν διαγράφηκε')
    }

    return (
        <div className="wrong-questions-page">
            <h1>Λάθη</h1>
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
                    onClick={deleteHistory}
                >
                    <i className="bi bi-trash"> </i>
                    Διαγραφή Ιστορικού
                </button>
            </div>

            <a href="/" className="back-button">
                <i className="bi bi-house-fill"></i>
                Αρχική Σελίδα
            </a>
        </div>
    )
}