import './App.css';
import Header from './components/Header';

import { QuizState, START } from './reducer/reducer';
import Quiz from './components/Quiz';
import { useQuizContext } from './context/quiz.context';

function App() {
  const state: QuizState = useQuizContext();
  const { dispatch, start } = state;
  return (
    <main>
      <Header />
      {start ? (
        <Quiz />
      ) : (
        <button onClick={() => dispatch({ type: START })}>Start</button>
      )}
    </main>
  );
}

export default App;
