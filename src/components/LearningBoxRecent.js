import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useSettings } from '../hooks/useSettings';

export default function LearningBoxRecent(props) {
    const navigation = useNavigation();
    const { t, colors } = useSettings();
    return (
        <TouchableOpacity style={[styles.learningBox, { backgroundColor: colors.primary }]} onPress={() => navigation.navigate('Practice', { cards: props.cards, name: props.name })}>
            <Text style={styles.karteiName}> {props.name} </Text>
            <Text style={styles.cardCount}>{t.cardsCount(props.cardCount)}</Text>
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