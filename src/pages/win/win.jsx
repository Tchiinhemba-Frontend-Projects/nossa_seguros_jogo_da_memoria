import "./styles.scss";
import Confetti from "react-confetti";

import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxReload } from "react-icons/rx";

import { TimerContext } from "../../context/timerContext";
import { assets } from "../../assets";

const Win = () => {
  const { resetState } = useContext(TimerContext);
  const { nossaSeguros } = assets();
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      resetState();
      navigate("/");
    }, 8000);

    return () => clearTimeout(timeoutId);
  }, [resetState, navigate]);

  return (
    <div className="wrapper_en">
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <div className="first_content_en">
        <div className="logo_container_en">
          <img src={nossaSeguros} alt="Nossa Seguros Logo" />
        </div>
        <div className="text_container_en">
          <p>
            PARABÉNS,
            <br />
            GANHOU!
          </p>
        </div>

        <Link to="/">
          <button className="btn_accept_en" onClick={resetState}>
            <RxReload />
          </button>
        </Link>
      </div>
    </div>
  );
};

export { Win };
