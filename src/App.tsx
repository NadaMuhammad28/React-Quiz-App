import { useEffect, useReducer } from 'react';

import './App.css';
import Header from './components/Header';

import {
  FETCH_QUESTIONS,
  START,
  initialState,
  reducer,
} from './reducer/reducer';
import Quiz from './components/Quiz';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const fetchQuestions = async () => {
      const res = await (await fetch('http://localhost:3000/questions')).json();
      dispatch({ type: FETCH_QUESTIONS, payload: res });
    };

    fetchQuestions();
  }, []);
  return (
    <main>
      <Header />
      {state.start ? (
        <Quiz
          hasAnswered={state.hasAnswered}
          questions={state.questions}
          totalPoints={state.totalPoints}
          totalQuestions={state.totalQuestions}
          points={state.points}
          dispatch={dispatch}
          index={state.index}
        />
      ) : (
        <button onClick={() => dispatch({ type: START })}>Start</button>
      )}
    </main>
  );
}

export default App;
