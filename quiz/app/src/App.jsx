import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage.jsx";
import QuizPage from "./pages/QuizPage/QuizPage.jsx";

function App() {

  return (
      <Router>
          <div className="App">
              <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/quiz" element={<QuizPage />} />
              </Routes>
          </div>
      </Router>
  )
}

export default App
