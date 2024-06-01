import React, { useState } from 'react';
import './QuizPage.css';
import QuizHeader from "../../components/QuizHeader/QuizHeader.jsx";
import QuizAnswer from "../../components/QuizAnswer/QuizAnswer.jsx";

import questions from '../../assets/data/questions.json';
import {Button, Modal} from "react-bootstrap";


export default function QuizPage() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [totalCorrect, setTotalCorrect] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(questions.length);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [answered, setAnswered] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAnswerClick = (selectedOption) => {
        const currentQuestionData = questions[currentQuestion];
        if (currentQuestionData.correctAnswerIndex === selectedOption) {
            setTotalCorrect(totalCorrect + 1);
        }

        else {
            // Save the question that was answered incorrectly to local storage
            let incorrectQuestions = JSON.parse(localStorage.getItem('incorrectQuestions')) || [];

            // Check if the current question is already in the incorrect questions list
            const isAlreadyIncorrect = incorrectQuestions.some(
                (question) => question.question === currentQuestionData.question
            );

            if (!isAlreadyIncorrect) {
                incorrectQuestions.push(currentQuestionData);
                localStorage.setItem('incorrectQuestions', JSON.stringify(incorrectQuestions));
            }
        }
        setSelectedAnswer(selectedOption);
        setAnswered(true);

        // Wait 2 seconds before moving to the next question
        setTimeout(() => {
            setSelectedAnswer(null);
            if (currentQuestion + 1 < totalQuestions) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                handleShow();
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
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        🎉 Τέλος του Quiz! 🎉
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Μπράβο! Ολοκλήρωσες το Quiz με επιτυχία! <br/>
                    Πέτυχες {totalCorrect} στις {totalQuestions} ερωτήσεις. <br/> <br/>
                    Μπορείς να δεις τις λάθος απαντήσεις σου <a href="/wrong-questions">εδώ</a>. <br/> <br/>

                    Θέλεις να ξαναπαίξεις;
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={() => {
                        setCurrentQuestion(0);
                        setTotalCorrect(0);
                        handleClose();
                    }}>
                        <i className="bi bi-arrow-repeat"> </i> Ναι
                    </Button>

                    <Button variant="secondary" onClick={() => {
                        window.location.href = "/";
                    }}>
                        <i className="bi bi-house"> </i>
                        Όχι
                    </Button>
                </Modal.Footer>
            </Modal>

            <div style={{
                display: "flex",
                width: "100%",
            }}>
                <a href="/" className="home-btn">
                    <i style={{fontSize: "6vh", alignSelf: "flex-start", color: "var(--green)"}} className="bi bi-house-door"></i>
                </a>

            </div>

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
        </div>
    );
}
