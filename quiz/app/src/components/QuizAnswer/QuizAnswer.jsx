import './QuizAnswer.css'

export default function QuizAnswer({answerLetter, answerText, isCorrect, onClick, correctAnswer, answered}) {
    let className = 'quiz-answer';
    if (isCorrect === true) {
        className += ' correct';
    }
    else if (answerText === correctAnswer && answered) {
        className += ' correct';
    }
    else if (isCorrect === false) {
        className += ' incorrect';
    }

    return (
        <button
            className={className}
            onClick={onClick}
        >
            <div className="quiz-answer-letter">
                {answerLetter}
            </div>

            <div className="quiz-answer-text">
                {answerText}
            </div>
        </button>
    )
}