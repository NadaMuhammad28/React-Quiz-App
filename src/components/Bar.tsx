import { State } from '../reducer/reducer';
export default function Bar({
  totalPoints,
  points,
  questionNum,
  totalQuestions,
}: BarProps) {
  return (
    <header className='progress'>
      <progress max={totalQuestions} value={questionNum} />

      <p>
        Question <strong>{questionNum}</strong> / {totalQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {totalPoints}
      </p>
    </header>
  );
}

export interface BarProps extends State {
  questionNum: number;
}
