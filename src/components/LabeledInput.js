import TextBox from '../components/TextBox';
import { View, Text, StyleSheet } from 'react-native';

export default function LabeledInput(props) {
    return (
        <View style={styles.labeledInput}>
            <Text>{props.label}</Text>
            <TextBox />
        </View>
    )
}

const styles = StyleSheet.create({
    labeledInput: {
        paddingHorizontal: 30
    }
})