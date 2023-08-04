import "./styles.scss";

const Card = (props) => {
  const { icon, fallback, card, handleChoice, flipped, disabled } = props;

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img
          src={icon}
          className="front"
          onClick={() => {
            handleClick(handleChoice, disabled, card);
          }}
        />
        <img
          src={fallback}
          className="back"
          onClick={() => {
            handleClick(handleChoice, disabled, card);
          }}
        />
      </div>
    </div>
  );
};

const handleClick = (handleChoice, disabled, card) => {
  if (!disabled) {
    handleChoice(card);
  }
};

export { Card };
