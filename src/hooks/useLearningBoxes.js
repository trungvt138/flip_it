import { useState } from 'react';

export function useLearningBoxes() {
    const [learningBoxes, setLearningBoxes] = useState([
    //     { name: 'Englisch LK - Unit 3: Globalisierung', date: '01.12.2026', cardCount: 2,
    //         cards: [
    //         { front: 'What is globalization?', back: 'Globalization is the process of interaction and integration among people, companies, and governments worldwide.' },
    //         { front: 'What are the main drivers of globalization?', back: 'The main drivers of globalization include technological advancements, trade liberalization, and the growth of multinational corporations.' },
    //     ] 
    // }
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
    return { learningBoxes, addLearningBox, deleteLearningBox };
}