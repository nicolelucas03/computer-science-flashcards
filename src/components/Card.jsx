const Card = ({
  text,
  flipCard,
  isFlipped,
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
}) => {
  return (
    <div
      className={`Card ${isFlipped ? "answer" : "question"}`}
      onClick={flipCard}
    >
      <div className="cardTextArea">
        <p>{text}</p>
      </div>

      <div className="cardControls">
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onPrevious();
          }}
          disabled={!canGoPrevious}
        >
          Back
        </button>
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onNext();
          }}
          disabled={!canGoNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Card;