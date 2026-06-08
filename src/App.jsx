import Quiz from './components/Quiz';

function App() {

  return (
    <div>
       <Quiz
        question="Столица Кыргызстана?"
        answers={["Ош", "Бишкек", "Кант", "Талас"]}
        correctAnswer="Бишкек"
      />
    </div>
  );
}

export default App;
