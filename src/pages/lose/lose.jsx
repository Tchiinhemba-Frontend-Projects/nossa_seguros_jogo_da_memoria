import "./styles.scss";
import { useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { RxReload } from "react-icons/rx";
import { TimerContext } from "../../context/timerContext";
import { assets } from "../../assets";

const Lose = () => {
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
    <div className="wrapper_lo">
      <div className="first_content_lo">
        <div className="logo_container_lo">
          <img src={nossaSeguros} alt="Nossa Seguros Logo" />
        </div>
        <div className="text_container_lo">
          <p>
            PARA A PRÓXIMA,
            <br />
            SERÁ MELHOR!
          </p>
        </div>

        <Link to="/">
          <button className="btn_accept_lo" onClick={resetState}>
            <RxReload />
          </button>
        </Link>
      </div>
    </div>
  );
};

export { Lose };
