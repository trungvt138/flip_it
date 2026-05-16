import { useState } from 'react';

export function useCards() {
  const [cards, setCards] = useState([]);

  function addCard(card) {
    setCards((prevCards) => {
      return [...prevCards, card];
    });
  }

  function deleteCard(index) {
    setCards((prevCards) => {
      return prevCards.filter((card, i) => i !== index);
    });
  }

  return { cards, addCard, deleteCard };
}