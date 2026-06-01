import { useState } from 'react';

export default function useProgressBar() {
    const [progress, setProgress] = useState(0);

    const incrementProgress = () => {
        setProgress(prevProgress => prevProgress + 1);
    }

    return { progress, incrementProgress };
}