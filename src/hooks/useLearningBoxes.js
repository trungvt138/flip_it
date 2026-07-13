import { useState, useMemo, useCallback, createContext, useContext } from 'react';

const LearningBoxesContext = createContext();

export function LearningBoxesProvider({ children }) {
    const [learningBoxes, setLearningBoxes] = useState([]);

    const addLearningBox = useCallback((box) => {
        setLearningBoxes(prev => [...prev, box]);
    }, []);

    const deleteLearningBox = useCallback((index) => {
        setLearningBoxes(prev => prev.filter((_, i) => i !== index));
    }, []);

    const getLastLearningBox = useCallback(() => {
        return learningBoxes[learningBoxes.length - 1] ?? null;
    }, [learningBoxes]);

    const updateLearningBox = useCallback((index, box) => {
        setLearningBoxes(prev => prev.map((b, i) => i === index ? box : b));
    }, []);

    const markOpened = useCallback((index) => {
        setLearningBoxes(prev => prev.map((b, i) => i === index ? { ...b, lastOpenedAt: Date.now() } : b));
    }, []);

    const value = useMemo(
        () => ({ learningBoxes, addLearningBox, deleteLearningBox, getLastLearningBox, updateLearningBox, markOpened }),
        [learningBoxes, addLearningBox, deleteLearningBox, getLastLearningBox, updateLearningBox, markOpened]
    );

    return (
        <LearningBoxesContext.Provider value={value}>
            {children}
        </LearningBoxesContext.Provider>
    );
}

export function useLearningBoxes() {
    return useContext(LearningBoxesContext);
}
