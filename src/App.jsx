import { useState } from 'react';
import './App.css';
import Card from './components/Card';

const App = () => {
  const cards = [
    {
      question: "Who is known as the father of computer science?",
      answer: "Alan Turing"
    },
    {
      question: "What does CPU stand for?",
      answer: "Central Processing Unit"
    },
    {
      question: "What data structure uses FIFO?",
      answer: "Queue"
    },
    {
      question: "What data structure uses LIFO?",
      answer: "Stack"
    }, 
    {
      question: "What does RAM stand for?",
      answer: "Random Access Memory"
    },
    {
      question: "Which programming language is primarily used for styling web pages?",
      answer: "CSS"
    },
    {
      question: "What does HTML stand for?",
      answer: "HyperText Markup Language"
    },
    {
      question: "Who founded Microsoft?",
      answer: "Bill Gates and Paul Allen"
    },
    {
      question: "What data structure uses LIFO?",
      answer: "Stack"
    },
    {
      question: "What does URL stand for?",
      answer: "Uniform Resource Locator"
    }
  ];

  const createShuffledOrder = () => {
    const order = cards.map((_, index) => index);

    for (let index = order.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [order[index], order[randomIndex]] = [order[randomIndex], order[index]];
    }

    return order;
  };

  const [currentCard, setCurrentCard] = useState(0);
  const [cardOrder, setCardOrder] = useState(() => cards.map((_, index) => index));
  const [isFlipped, setIsFlipped] = useState(false);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState(null);

  const currentCardData = cards[cardOrder[currentCard]];

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const resetCardState = () => {
    setIsFlipped(false);
    setGuess('');
    setFeedback(null);
  };

  const goToPreviousCard = () => {
    if (currentCard === 0) {
      return;
    }

    setCurrentCard(currentCard - 1);
    resetCardState();
  };

  const goToNextCard = () => {
    if (currentCard === cards.length - 1) {
      return;
    }

    setCurrentCard(currentCard + 1);
    resetCardState();
  };

  const shuffleCards = () => {
    setCardOrder(createShuffledOrder());
    setCurrentCard(0);
    resetCardState();
  };

  const handleGuessSubmit = (event) => {
    event.preventDefault();

    const isCorrect = guess.trim().toLowerCase() === currentCardData.answer.toLowerCase();

    setFeedback({
      type: isCorrect ? 'correct' : 'incorrect',
      message: isCorrect ? 'Correct! Nice work.' : 'Incorrect. Try again.'
    });
  };

  return (
    <div className="App">
      <h1>Computer Science Trivia!</h1>
      <h2>Trivia game for computer science technologists.</h2>
      <p>Total Cards: {cards.length}</p>
      <p className="cardCounter">
        Card {currentCard + 1} of {cards.length}
      </p>

      <Card
        text={isFlipped ? currentCardData.answer : currentCardData.question}
        flipCard={flipCard}
        isFlipped={isFlipped}
        onPrevious={goToPreviousCard}
        onNext={goToNextCard}
        canGoPrevious={currentCard > 0}
        canGoNext={currentCard < cards.length - 1}
        cardNumber={currentCard + 1}
        totalCards={cards.length}
      />

      <button className="shuffleButton" type="button" onClick={shuffleCards}>
        Shuffle Cards
      </button>

      {!isFlipped && (
        <form className="guessForm" onSubmit={handleGuessSubmit}>
          <label htmlFor="guess-input">Enter your guess before flipping the card</label>
          <div className="guessRow">
            <input
              id="guess-input"
              type="text"
              value={guess}
              onChange={(event) => setGuess(event.target.value)}
              placeholder="Type your answer here"
            />
            <button type="submit">Submit Guess</button>
          </div>
        </form>
      )}

      {feedback && (
        <p className={`feedbackMessage ${feedback.type}`} aria-live="polite">
          {feedback.message}
        </p>
      )}
    </div>
  );
}; 

export default App;