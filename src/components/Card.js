import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import LabeledInputs from './LabeledInput';
import { useSettings } from '../hooks/useSettings';

export default function Card(props) {
    const { t, colors } = useSettings();
    return (
        <View style={[styles.card, { borderColor: colors.primary }]}>

            <TouchableOpacity style={styles.deleteButton} onPress={() => props.onDelete(props.index)}>
                <Ionicons name="close" size={16} color="#fff" />
            </TouchableOpacity>

            <LabeledInputs
                label={t.front}
                value={props.front}
                onChangeText={props.onFrontChange}
                textStyle={{justifyContent: 'flex-end'}}
            />
            <LabeledInputs
                label={t.back}
                value={props.back}
                onChangeText={props.onBackChange}
                style={styles.labeledInputBack}
                textStyle={{justifyContent: 'flex-end'}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 2,
        borderColor: '#9080F7',
        borderRadius: 14,
        width: '95%',
        alignSelf: 'center',
        paddingBottom: 19,
        paddingTop: 20,
        paddingHorizontal: 14,
        overflow: 'hidden',
    },
    deleteButton: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 26,
        height: 26,
        backgroundColor: '#cd5c5c',
        borderBottomRightRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    labeledInputBack: {
        marginTop: 15,
    }

})