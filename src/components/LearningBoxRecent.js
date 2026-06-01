import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function LearningBoxRecent(props) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.learningBox} onPress={() => navigation.navigate('Practice', { cards: props.cards, name: props.name })}>
            <Text style={styles.karteiName}> {props.name} </Text>
            <Text style={styles.cardCount}> {props.cardCount} Cards </Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    learningBox: {
        width: 300,
        height: 80,
        borderRadius: 14,
        backgroundColor: '#9080F7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardCount: {
        marginTop: 4,
        color: 'white',
    },
    karteiName: {
        color: 'white',
        fontSize: 16,
    }

});