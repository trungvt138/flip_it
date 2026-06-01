import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LabeledInputs from './LabeledInput';

export default function Card(props) {
    return (
        <View style={styles.card}>
            
            <LabeledInputs
                label={"Front:"}
                value={props.front}
                onChangeText={props.onFrontChange}
                rightElement={
                    <TouchableOpacity onPress={() => props.onDelete(props.index)}>
                        <Image 
                            source={require('../../assets/minus.png')} 
                            style={styles.image} 
                        />
                    </TouchableOpacity>
                }
            />
            <LabeledInputs
                label={"Back:"}
                value={props.back}
                onChangeText={props.onBackChange}
                style={styles.labeledInputBack}
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
        paddingTop: 10,
        paddingHorizontal: 14,
    },
    image: {
        alignSelf: 'flex-end',
        marginBottom: 6,
    },
    labeledInputBack: {
        marginTop: 15,
    }

})