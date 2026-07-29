import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Animated } from "react-native";
import { useLCardFlip } from "../hooks/useLCardFlip";
import { useSettings } from "../hooks/useSettings";

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const LCard = ({front, back, onEasy, onRepeat}) => {
    const { flipped, flip, flipToFrontStyle, flipToBackStyle, resetFlip } = useLCardFlip();
    const { colors, t } = useSettings();

    useEffect(() => {
        resetFlip();
    }, [front]);

    return (
        <View>
            <AnimatedTouchable activeOpacity={1} onPress={flip} style={[styles.card, { backgroundColor: colors.card }, flipToFrontStyle]}>
                <View></View>
                <Text style={[styles.text, { color: colors.text }]}>{front}</Text>
                <View style={styles.icon}>
                    <Image source={require('../../assets/front-flip.png')}></Image>
                </View>
            </AnimatedTouchable>
            <AnimatedTouchable activeOpacity={1} onPress={flip} style={[styles.card, styles.back, flipToBackStyle]}>
                <View></View>
                <Text style={[styles.text, { color: '#fff' }]}>{back}</Text>
                <View style={styles.icon}>
                    <Image source={require('../../assets/back-flip.png')}></Image>
                </View>
            </AnimatedTouchable>

            {flipped && (
                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.repeat} onPress={onRepeat}>
                    <Text style={styles.btnText}>{t.repeat}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.easy} onPress={onEasy}>
                    <Text style={styles.btnText}>{t.easy}</Text>
                </TouchableOpacity>
            </View>
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 300,
        height: 377,
        borderRadius: 14,
        backgroundColor : '#D9D9D9',
        // shadowColor: 'black',
        // shadowOffset: {width: 0, height: 4},
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        // elevation: 4,
        justifyContent: 'space-between',
        marginTop: 67,
        alignItems: 'center',
        backfaceVisibility: 'hidden',
    },
    text: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    },
    icon: {
        alignSelf: 'center',
        marginTop: 20,
        paddingBottom: 15,
    },
    front: {
        backgroundColor : '#D9D9D9',
    },
    back: {
        position: 'absolute',
        backgroundColor : '#9080F7',
    },
    buttonContainer: {
        marginTop: 31,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    repeat: {
        width: 133,
        height: 112,
        backgroundColor: '#cd5c5c',
        borderRadius: 14,
    },
    easy: {
        width: 133,
        height: 112,
        backgroundColor: '#1db954',
        borderRadius: 14,
    },
    btnText: {
        color: 'white', 
        fontSize: 18, 
        fontWeight: 'bold', 
        alignSelf: 'center', 
        marginTop: 40
    }
})

export default LCard;