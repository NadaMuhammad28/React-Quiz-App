import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { FETCH_QUESTIONS, QuizState, initialState, reducer } from '../reducer';

const QuizContext = createContext<QuizState | undefined>(undefined);

const buildEndpoint = (): string => {
  return `${import.meta.env.VITE_REACT_APP_SUPABASE_HOST_URL}/${
    import.meta.env.VITE_REACT_APP_SUPABASE_CONTEXT
  }`;
};
export const QuizContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchQuestions = async () => {
      const res = await (
        await fetch(buildEndpoint(), {
          headers: { apikey: import.meta.env.VITE_REACT_APP_SUPABASE_API_KEY },
        })
      ).json();
      dispatch({ type: FETCH_QUESTIONS, payload: res });
    };
    fetchQuestions();
  }, []);
  return (
    <QuizContext.Provider value={{ ...state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (!context) throw 'no context found!';
  return context;
};
