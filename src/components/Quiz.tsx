import Bar from './Bar';
import Question from './Question';
import Actions from './Actions';
export default function Quiz() {
  //   useEffect(() => {
  //     const timerId = setInterval(() => {
  //       console.log(new Date(10).getMinutes());
  //     }, 1000);
  //     return () => clearInterval(timerId);
  //   }, []);
  return (
    <>
      <Bar />
      <Question />
      <Actions />
    </>
  );
}
