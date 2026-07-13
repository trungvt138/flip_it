import { useState, useCallback } from 'react';

export function useCards(initialCards = [{ front: '', back: '' }]) {
  const [cards, setCards] = useState(() =>
    initialCards.map((c, i) => ({ ...c, id: c.id ?? i }))
  );

  const addCard = useCallback((card) => {
    setCards((prevCards) => {
      return [...prevCards, { ...card, id: Date.now() }];
    });
  }, []);

  const deleteCard = useCallback((index) => {
    setCards((prevCards) => {
      return prevCards.filter((card, i) => i !== index);
    });
  }, []);

  const updateCard = useCallback((index, field, value) => {
    setCards((prevCards) => {
      return prevCards.map((card, i) => {
        if (i === index) {
          return { ...card, [field]: value };
        }
        return card;
      });
    });
  }, []);

  return { cards, addCard, deleteCard, updateCard };
}
