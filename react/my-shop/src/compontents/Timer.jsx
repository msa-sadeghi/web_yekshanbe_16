import { useRef, useState } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const interValRef = useRef(null);
  const startTimer = () => {
    interValRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(interValRef.current);
  };
  const resetTimer = () => {
    clearInterval(interValRef.current);
    setSeconds(0);
  };
  return (
    <div>
      <p>time :{seconds} seconds</p>
      <button onClick={startTimer}>start</button>
      <button onClick={stopTimer}>stop</button>
      <button onClick={resetTimer}>reset</button>
    </div>
  );
}
