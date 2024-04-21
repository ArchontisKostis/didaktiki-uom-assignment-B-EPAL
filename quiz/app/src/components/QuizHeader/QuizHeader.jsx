import './QuizHeader.css'

export default function QuizHeader({currentQuestionNum, totalQuestions, totalCorrect}) {
    return (
        <div className="quiz-header">
            <div className="quiz-progress">
                Ερώτηση {currentQuestionNum} από {totalQuestions}
            </div>

            <div className="quiz-correct">
                <b>Σωστές:</b> {totalCorrect}
            </div>
        </div>
    )
}