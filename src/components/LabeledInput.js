import TextBox from '../components/TextBox';
import { View, Text, StyleSheet } from 'react-native';
import { useSettings } from '../hooks/useSettings';

export default function LabeledInput(props) {
    const { colors } = useSettings();
    return (
        <View style={[styles.labeledInput, props.style]}>
            <View style={[{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}, props.textStyle]}>
                {props.leftElement}
                <Text style={{ color: colors.text }}>{props.label}</Text>
                {props.rightElement}
            </View>
            <TextBox value={props.value} onChangeText={props.onChangeText} />
        </View>
    )
}

const styles = StyleSheet.create({
    labeledInput: {
        
    }
})