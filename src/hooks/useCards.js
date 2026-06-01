import { useState } from 'react';

export function useCards(initialCards = [{ front: '', back: '' }]) {
  const [cards, setCards] = useState(() =>
    initialCards.map((c, i) => ({ ...c, id: c.id ?? i }))
  );

  function addCard(card) {
    setCards((prevCards) => {
      return [...prevCards, { ...card, id: Date.now() }];
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