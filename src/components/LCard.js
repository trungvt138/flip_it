import { useRef, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Animated } from "react-native";
import { useLCardFlip } from "../hooks/useLCardFlip";

const LCard = () => {
    const { flipped, flip, flipToFrontStyle, flipToBackStyle } = useLCardFlip();

    return (
        <View>
            <Animated.View style={[styles.card, styles.front, flipToFrontStyle]}>
                <View></View>
                <Text style={styles.text}>What is HTML?</Text>
                <TouchableOpacity style={styles.icon} onPress={flip}>
                    <Image source={require('../../assets/front-flip.png')}></Image>
                </TouchableOpacity>
            </Animated.View>
            <Animated.View style={[styles.card, styles.back, flipToBackStyle]}>
                <View></View>
                <Text style={styles.text}>Hyper Text Markup Language</Text>
                <TouchableOpacity style={styles.icon} onPress={flip}>
                    <Image source={require('../../assets/back-flip.png')}></Image>
                </TouchableOpacity>
            </Animated.View>

            {flipped && (
                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.repeat}>
                    <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold', alignSelf: 'center', marginTop: 40}}>Repeat</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.easy}>
                    <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold', alignSelf: 'center', marginTop: 40}}>Easy</Text>
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
        backgroundColor: '#EC221F',
        borderRadius: 14,
    },
    easy: {
        width: 133,
        height: 112,
        backgroundColor: '#34C759',
        borderRadius: 14,
    }
})

export default LCard;