import { StyleSheet, View } from "react-native";

export default function HorizontalRuler() {
    return (
        <View style={styles.horizontalRuler} />
    );
}

const styles = StyleSheet.create({
    horizontalRuler: {
      alignSelf: 'stretch',
      borderBottomColor: '#c4b5fd',
      borderBottomWidth: 1,
      paddingTop: 15,
      opacity: 0.6,
    },
})