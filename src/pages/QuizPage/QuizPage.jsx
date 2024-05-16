import React, { useState } from 'react';
import './QuizPage.css';
import QuizHeader from "../../components/QuizHeader/QuizHeader.jsx";
import QuizAnswer from "../../components/QuizAnswer/QuizAnswer.jsx";

import questions from '../../assets/data/questions.json';

export default function QuizPage() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [totalCorrect, setTotalCorrect] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(questions.length);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [answered, setAnswered] = useState(false);

    const handleAnswerClick = (selectedOption) => {
        const currentQuestionData = questions[currentQuestion];
        if (currentQuestionData.correctAnswerIndex === selectedOption) {
            setTotalCorrect(totalCorrect + 1);
        }

        else {
            // Save the question that was answered incorrectly to local storage
            let incorrectQuestions = JSON.parse(localStorage.getItem('incorrectQuestions')) || [];
            incorrectQuestions.push(currentQuestionData);

            localStorage.setItem('incorrectQuestions', JSON.stringify(incorrectQuestions));
        }
        setSelectedAnswer(selectedOption);
        setAnswered(true);

        // Wait 2 seconds before moving to the next question
        setTimeout(() => {
            setSelectedAnswer(null);
            if (currentQuestion + 1 < totalQuestions) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                alert('Το τεστ τελείωσε! Σωστές απαντήσεις: ' + totalCorrect);
            }
            setAnswered(false);
        }, 1000);
    };

    // Get what the correct answer is so we can highlight it

    const currentQuestionData = questions[currentQuestion];
    const possibleAnswers = currentQuestionData.possibleAnswers.map((answer, index) => ({
        answerLetter: String.fromCharCode(65 + index), // Convert index to letter (A, B, C, D)
        answerText: answer,
        isCorrect: selectedAnswer === index ? currentQuestionData.correctAnswerIndex === index : null,
        onClick: () => handleAnswerClick(index),
        correctAnswer: currentQuestionData.possibleAnswers[currentQuestionData.correctAnswerIndex],
        answered: answered
    }));

    return (
        <div className="quiz-page">
            <QuizHeader
                currentQuestionNum={currentQuestion + 1}
                totalQuestions={totalQuestions}
                totalCorrect={totalCorrect}
            />

            <div className="quiz-bottom">
                <div className="quiz-question">
                    {currentQuestionData.question}
                </div>

                {possibleAnswers.map((answer, index) => (
                    <QuizAnswer
                        key={index}
                        {...answer}
                    />
                ))}
            </div>

            <a href="/" className="back-button">
                <i className="bi bi-house-fill"></i>
                Αρχική Σελίδα
            </a>
        </div>
    );
}
