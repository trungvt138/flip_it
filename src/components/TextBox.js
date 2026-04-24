import { StyleSheet, Text, TextInput, } from 'react-native';

export default function TextBox(props) {
    return (
        <TextInput placeholder={props.placeholder} style={styles.textBox}/>
    )
}

const styles = StyleSheet.create({
  textBox: {
    alignSelf: 'stretch',
    height: 36,
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    paddingLeft: 13,
    paddingTop: 10,
    textAlignVertical: 'center',
  },
});