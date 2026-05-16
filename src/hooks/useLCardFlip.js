import { useRef, useState } from "react";
import { Animated } from "react-native";

export function useLCardFlip() {
    const flipAnim = useRef(new Animated.Value(0)).current;
    const [flipped, setFlipped] = useState(false);

    const frontRotate = flipAnim.interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg', '180deg'],
    });

    const backRotate = flipAnim.interpolate({
        inputRange: [0, 180],
        outputRange: ['180deg', '360deg'],
    });

    const flipToFrontStyle = {
        transform: [{ perspective: 1000 }, { rotateY: frontRotate }],
    };

    const flipToBackStyle = {
        transform: [{ perspective: 1000 }, { rotateY: backRotate }],
    };

    const flip = () => {
        if (flipped) {
            Animated.spring(flipAnim, {
                toValue: 0,
                friction: 8,
                tension: 10,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.spring(flipAnim, {
                toValue: 180,
                friction: 8,
                tension: 10,
                useNativeDriver: true,
            }).start();
        }
        setFlipped(!flipped);
    };

    return { flipped, flip, flipToFrontStyle , flipToBackStyle};
}