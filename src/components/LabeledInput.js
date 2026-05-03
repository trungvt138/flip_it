import TextBox from '../components/TextBox';
import { View, Text, StyleSheet } from 'react-native';

export default function LabeledInput(props) {
    return (
        <View style={[styles.labeledInput, props.style]}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text>{props.label}</Text>
                {props.rightElement}
            </View>
            <TextBox />
        </View>
    )
}

const styles = StyleSheet.create({
    labeledInput: {
        
    }
})