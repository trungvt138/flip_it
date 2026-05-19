import { useState } from "react";

export function useText() {
    const [text, setText] = useState("");

    function handleChange(newText) {
        setText(newText);
    }

    return { text, handleChange };
}