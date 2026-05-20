import { useState } from 'react';

export function usePracticeSession() {
    const [easy, setEasy] = useState(0);
    const [repeat, setRepeat] = useState(0);
    const [repeatCards, setRepeatCards] = useState([]);

    function markEasy() {
        setEasy(prev => prev + 1);
    }

    function markRepeat(card) {
        setRepeat(prev => prev + 1);
        setRepeatCards(prev => [...prev, card]);
    }

    return { easy, repeat, repeatCards, markEasy, markRepeat };
}