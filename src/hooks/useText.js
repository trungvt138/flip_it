import { useState, useCallback } from "react";

export function useText(initialText = "") {
    const [text, setText] = useState(initialText);

    const handleChange = useCallback((newText) => {
        setText(newText);
    }, []);

    return { text, handleChange };
}
