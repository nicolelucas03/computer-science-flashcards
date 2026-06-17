const Card = ({ text, flipCard, isFlipped }) => {
  return (
    <div
      className={`Card ${isFlipped ? "answer" : "question"}`}
      onClick={flipCard}
    >
      {text}
    </div>
  );
};

export default Card;