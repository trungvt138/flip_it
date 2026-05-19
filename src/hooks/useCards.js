import { useState } from 'react';

export function useCards() {
  const [cards, setCards] = useState([
    { front: '', back: '' },
  ]);

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

  function updateCard(index, field, value) {
    setCards((prevCards) => {
      return prevCards.map((card, i) => {
        if (i === index) {
          return { ...card, [field]: value };
        }
        return card;
      });
    });
  }

  return { cards, addCard, deleteCard, updateCard };
}