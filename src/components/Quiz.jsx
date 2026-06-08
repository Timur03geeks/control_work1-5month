import { useState } from 'react';
import './Quiz.css';

function Quiz({ question, answers, correctAnswer }) {
    const [message, setMessage] = useState("");

    const checkAnswer = (answer) => {
        if (answer === correctAnswer) {
            setMessage("Правильно!");
        } else {
            setMessage("Неправильно!");
        };
    };
    

    return (
        <div className="Quiz">
            <h2>{question}</h2>
            {answers.map((answer, index) => (
                <button 
                  key={index} 
                  onClick={() => checkAnswer(answer)}
                >
                  {answer}
                </button>
            ))}
            <p>{message}</p>    
        </div>    
    ); 
}

export default Quiz;           