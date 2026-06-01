import { useState } from "react";

export function useText(initialText = "") {
    const [text, setText] = useState(initialText);

    function handleChange(newText) {
        setText(newText);
    }

    return { text, handleChange };
}