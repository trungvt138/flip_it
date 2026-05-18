import { useState } from 'react';

export function useLearningBoxes() {
    const [learningCards, setLearningBoxes] = useState([
        { name: 'Englisch LK - Unit 3: Globalisierung', date: '01.12.2026', cardCount: 10 }
    ]);

    function addLearningBox(card) {
        setLearningBoxes((prevBoxes) => {
            return [...prevBoxes, card];
        });
    }

    function deleteLearningBox(index) {
        setLearningBoxes((prevBoxes) => {
            return prevBoxes.filter((box, i) => i !== index);
        });
    }
    return { learningCards, addLearningBox, deleteLearningBox };
}