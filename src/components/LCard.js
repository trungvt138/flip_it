import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function LCard() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>What is HTML?</Text>
            <TouchableOpacity style={styles.icon}>
                <Image source={require('../../assets/front-flip.png')}></Image>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 377,
        borderRadius: 14,
        backgroundColor : '#D9D9D9',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
        justifyContent: 'center',
        
    },
    text: {
        alignSelf: 'center',
    },
    icon: {
        alignSelf: 'center',
        
    }
})