import './App.css';
import Header from './components/Header';

import { QuizState } from './reducer/reducer';
import Quiz from './components/Quiz';
import { useQuizContext } from './context/quiz.context';
import { QuizStatus } from './models/Quiz.state';
import StartScreen from './components/StartScreen';
import FinishScreen from './components/FinishScreen';

function App() {
  const state: QuizState = useQuizContext();
  const { status } = state;
  return (
    <main>
      <Header />
      {status === QuizStatus.START ? (
        <StartScreen />
      ) : status === QuizStatus.PENDING ? (
        <Quiz />
      ) : (
        <FinishScreen />
      )}
    </main>
  );
}

export default App;
