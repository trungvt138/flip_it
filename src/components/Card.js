import { View, Text, StyleSheet } from 'react-native';
import LabeledInputs from './LabeledInput';

export default function Card() {
    return (
        <View style={styles.card}>
            <LabeledInputs label={"Front:"}/>
            <LabeledInputs label={"Back:"}/>
        </View> 
    )
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 2,
        borderColor: '#9080F7',
        borderRadius: 14,
        padding: 19
    }
})