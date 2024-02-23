import { Reducer } from 'react';
import { Action } from '../models/Reducer.type';
import { QuizStatus } from '../models/Quiz.state';
import {
  CHECK_ANSWER,
  FETCH_QUESTIONS,
  FINISH_QUIZ,
  NEXT_QUESTION,
  RESTART_QUIZ,
  START,
} from '.';
import { QUESTION_TIME_IN_SECONDS } from '../utils/constants';
export const reducer: Reducer<QuizState, Action> = (state, action) => {
  switch (action.type) {
    case START: {
      return { ...state, status: QuizStatus.PENDING };
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
      const quizTime = totalQuestions * QUESTION_TIME_IN_SECONDS;
      return { ...state, questions, totalPoints, totalQuestions, quizTime };
    }

    case NEXT_QUESTION: {
      console.log(action.payload);

      return state.index == state.questions.length - 1
        ? {
            ...state,
            status: QuizStatus.FINISHED,
            hasAnswered: false,
          }
        : {
            ...state,
            index: state.index++,
            hasAnswered: false,
          };
    }

    case CHECK_ANSWER: {
      console.log(action.payload);

      const correctAnswerIndex = action.payload.correctAnswerIndex;
      const points = action.payload.points;
      const chosenIndex = action.payload.chosenIndex;
      const scoredPoints = state.points + points;
      if (correctAnswerIndex === chosenIndex) {
        return {
          ...state,
          hasAnswered: true,
          points: scoredPoints,
          highScore:
            state.highScore >= scoredPoints ? state.highScore : scoredPoints,
        };
      } else return { ...state, hasAnswered: true };
    }

    case RESTART_QUIZ: {
      return {
        ...state,
        index: 0,
        points: 0,
        status: QuizStatus.PENDING,
        hasAnswered: false,

        questions: state.questions,
      };
    }

    case FINISH_QUIZ: {
      return {
        ...state,
        index: 0,
        points: 0,
        status: QuizStatus.FINISHED,
        hasAnswered: false,
        questions: state.questions,
      };
    }
    default:
      throw 'no action found';
  }
};

export const initialState = {
  questions: [],
  index: 0,
  status: QuizStatus.START,
  points: 0,
  totalPoints: 0,
  totalQuestions: 0,
  quizTime: 0,
  hasAnswered: false,
  highScore: 0,
};

export interface QuizState {
  questions: any[];
  index: number;
  state: string;
  quizTime: number;
  points: number;
  totalPoints: number;
  totalQuestions: number;
  hasAnswered: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  dispatch: Function;
  status: QuizStatus;
  highScore: number;
}
