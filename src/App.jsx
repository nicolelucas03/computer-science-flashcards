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

  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const nextCard = () => {
    let randomIndex;

    do {
      randomIndex = Math.floor(Math.random() * cards.length);
    } while (randomIndex === currentCard);

    setCurrentCard(randomIndex);
    setIsFlipped(false);
  };

  return (
    <div className="App">
      <h1>Computer Science Trivia!</h1>
      <h2>Trivia game for computer science technologists.</h2>
      <p>Total Cards: {cards.length}</p>

      <Card
        text={
          isFlipped
            ? cards[currentCard].answer
            : cards[currentCard].question
        }
        flipCard={flipCard}
        isFlipped={isFlipped}
      />

      <button onClick={nextCard}>Next Card</button>
    </div>
  );
}; 

export default App;