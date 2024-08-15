import { createContext, useState, useEffect } from "react";

const TimerContext = createContext();

const TimerProvider = ({ children }) => {

  const [seconds, setSeconds] = useState(5);
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [timerColor, setTimerColor] = useState('')


  useEffect(() => {
    if (gameStarted || seconds > 0) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          }
          return prevSeconds;
        });
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    } else if (seconds === 0 && !gameStarted) {
      setSeconds(45);
      setTimerColor('red');
      setGameStarted(true);
    }
  }, [gameStarted, seconds]);


  const resetState = () => {
    setSeconds(5);
    setCards([]);
    setGameStarted(false);
  };


  return (
    <TimerContext.Provider
      value={{
        seconds,
        cards,
        turns,
        disabled,
        gameStarted,
        timerColor,
        setCards,
        setSeconds,
        setTurns,
        setDisabled,
        setGameStarted,
        resetState,
        setTimerColor
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export { TimerContext, TimerProvider };
