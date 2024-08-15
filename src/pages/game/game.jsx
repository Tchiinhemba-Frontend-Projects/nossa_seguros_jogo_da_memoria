import "./styles.scss";
import { useEffect, useState, useContext } from "react";
import { TimerContext } from "../../context/timerContext";
import { useNavigate } from "react-router-dom";

import { assets } from "../../assets";
import { Card } from "../../components/card";

const Game = () => {
  const {
    seconds,
    cards,
    setCards,
    setTurns,
    turns,
    disabled,
    setDisabled,
    gameStarted,
    setGameStarted,
    resetState,
    timerColor,
    setTimerColor,
  } = useContext(TimerContext);

  const { nossaSeguros, fallBack } = assets();

  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const checked = cards.every((item) => item.matched);

    if (gameStarted && seconds === 0) {
      navigate("/lose");
      setGameStarted(false);
      resetState();
    } else if (checked) {
      setGameStarted(false);
      navigate("/win");
      resetState();
    }
  }, [seconds, gameStarted]);

  const handleChoice = (card) => {
    if (card.id === choiceOne?.id) return;
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.src === choiceOne.src ? { ...card, matched: true } : card
          )
        );
        resetTurn();
      } else {
        console.log("Those cards do not match");
        setTimeout(resetTurn, 1000);
      }
    }
  }, [choiceOne, choiceTwo, setCards]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  const handleClick = () => {
    navigate("/");
    resetState();
  };

  function endTime(timer) {
    if (timerColor == "green" && timer <= 5) {
      return "";
    }

    if (timerColor == "red" && timer <= 15) {
      return "end_time";
    }
  }

  return (
    <div className="flip_wrapper_fl">
      <div className={`timer_fl ${endTime(seconds)}`}>
        <div>{seconds}</div>
      </div>

      <div className="game_container_fl">
        <header className={`header_container_fl`}>
          <div className="header_logo_fl">
            <img src={nossaSeguros} alt="Nossa Seguros Logo" />
          </div>
        </header>

        <div className="highligt_fl">
          <span>JOGO DA MEMÓRIA</span>
        </div>

        <main className="grid_wrapper_fl">
          <div className="grid_container_fl">
            {cards.map((card) => (
              <Card
                icon={card.src}
                fallback={fallBack.src}
                card={card}
                key={card.id}
                handleChoice={handleChoice}
                flipped={
                  card === choiceOne ||
                  card === choiceTwo ||
                  card.matched ||
                  !gameStarted
                }
                disabled={disabled}
              />
            ))}
          </div>
        </main>

        <div className="footer_info_fl">TOQUE PARA JOGAR</div>

        <button className="btn_accept_ab" onClick={handleClick}>
          Cancelar
        </button>
      </div>
    </div>
  );
};

export { Game };
