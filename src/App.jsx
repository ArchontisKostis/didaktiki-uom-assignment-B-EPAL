import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage.jsx";
import QuizPage from "./pages/QuizPage/QuizPage.jsx";
import WrongQuestionsPage from "./pages/WrongQuestionsPage/WrongQuestionsPage.jsx";
import PresentationPage from "./pages/PresentationPage/PresentationPage.jsx";
import TheoryPage from "./pages/TheoryPage/TheoryPage.jsx";

function App() {

  return (
      <Router>
          <div className="App">
              <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/quiz" element={<QuizPage />} />
                    <Route path="/wrong-questions" element={<WrongQuestionsPage />} />
                    <Route path="/presentation" element={<PresentationPage />} />
                    <Route path="/theory" element={<TheoryPage />} />
                    <Route path="*" element={<h1>Not Found</h1>} />
              </Routes>
          </div>
      </Router>
  )
}

export default App
