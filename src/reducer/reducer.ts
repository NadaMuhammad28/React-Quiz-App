import { Reducer } from 'react';
import { Action } from '../models/Reducer.type';
export const reducer: Reducer<QuizState, Action> = (state, action) => {
  switch (action.type) {
    case START: {
      return { ...state, start: true };
    }

    case FETCH_QUESTIONS: {
      const questions: any[] = action.payload;

      const { totalPoints, totalQuestions } = questions.reduce(
        (a, b) => {
          a.totalPoints += b.points;
          a.totalQuestions++;

          return a;
        },
        {
          totalPoints: 0,
          totalQuestions: 0,
        }
      );
      return { ...state, questions, totalPoints, totalQuestions };
    }

    case NEXT_QUESTION: {
      console.log(action.payload);
      const index =
        state.index == state.questions.length ? state.index : state.index++;
      return { ...state, index, hasAnswered: false };
    }

    case CHECK_ANSWER: {
      console.log(action.payload);

      const correctAnswerIndex = action.payload.correctAnswerIndex;
      const points = action.payload.points;
      const chosenIndex = action.payload.chosenIndex;

      if (correctAnswerIndex === chosenIndex) {
        return {
          ...state,
          hasAnswered: true,
          points: state.points + points,
        };
      } else return { ...state, hasAnswered: true };
    }

    default:
      throw 'no action found';
  }
};

export const START = 'start';
export const FETCH_QUESTIONS = 'fetch questions';
export const NEXT_QUESTION = 'next question';
export const CHECK_ANSWER = 'check answer';

export const initialState = {
  questions: [],
  start: false,
  index: 0,
  state: 'loading',
  quizTime: 10,
  points: 0,
  totalPoints: 0,
  totalQuestions: 0,
  hasAnswered: false,
};

export interface QuizState {
  questions: any[];
  start: boolean;
  index: number;
  state: string;
  quizTime: number;
  points: number;
  totalPoints: number;
  totalQuestions: number;
  hasAnswered: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  dispatch: Function;
}
