import { useState, createContext, useContext } from 'react';

const LearningBoxesContext = createContext();

export function LearningBoxesProvider({ children }) {
    const [learningBoxes, setLearningBoxes] = useState([]);

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

    return (
        <LearningBoxesContext.Provider value={{ learningBoxes, addLearningBox, deleteLearningBox, getLastLearningBox, updateLearningBox }}>
            {children}
        </LearningBoxesContext.Provider>
    );
}

export function useLearningBoxes() {
    return useContext(LearningBoxesContext);
}