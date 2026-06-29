import { useState, createContext, useContext } from 'react';

const LearningBoxesContext = createContext();

export function LearningBoxesProvider({ children }) {
    const [learningBoxes, setLearningBoxes] = useState([
        {
            name: 'Englisch – Globalisierung',
            date: '20.6.2026',
            cardCount: 3,
            cards: [
                { id: 1, front: 'to globalise', back: 'globalisieren' },
                { id: 2, front: 'the trade', back: 'der Handel' },
                { id: 3, front: 'the border', back: 'die Grenze' },
            ],
        },
        {
            name: 'Mathe – Ableitungen',
            date: '22.6.2026',
            cardCount: 3,
            cards: [
                { id: 1, front: 'f(x) = x²', back: "f'(x) = 2x" },
                { id: 2, front: 'f(x) = sin(x)', back: "f'(x) = cos(x)" },
                { id: 3, front: 'f(x) = eˣ', back: "f'(x) = eˣ" },
            ],
        },
        {
            name: 'Geschichte – Weimarer Republik',
            date: '25.6.2026',
            cardCount: 3,
            cards: [
                { id: 1, front: 'Wann wurde die Weimarer Republik gegründet?', back: '1919' },
                { id: 2, front: 'Wer war erster Reichspräsident?', back: 'Friedrich Ebert' },
                { id: 3, front: 'Wann endete die Weimarer Republik?', back: '1933' },
            ],
        },
    ]);

    function addLearningBox(box) {
        setLearningBoxes(prev => [...prev, box]);
    }

    function deleteLearningBox(index) {
        setLearningBoxes(prev => prev.filter((_, i) => i !== index));
    }

    function getLastLearningBox() {
        return learningBoxes[learningBoxes.length - 1] ?? null;
    }

    function updateLearningBox(index, box) {
        setLearningBoxes(prev => prev.map((b, i) => i === index ? box : b));
    }

    function markOpened(index) {
        setLearningBoxes(prev => prev.map((b, i) => i === index ? { ...b, lastOpenedAt: Date.now() } : b));
    }

    return (
        <LearningBoxesContext.Provider value={{ learningBoxes, addLearningBox, deleteLearningBox, getLastLearningBox, updateLearningBox, markOpened }}>
            {children}
        </LearningBoxesContext.Provider>
    );
}

export function useLearningBoxes() {
    return useContext(LearningBoxesContext);
}