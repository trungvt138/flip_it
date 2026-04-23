import { StyleSheet, View } from "react-native";

export default function HorizontalRuler() {
    return (
        <View style={styles.horizontalRuler} />
    );
}

const styles = StyleSheet.create({
    horizontalRuler: {
    alignSelf: 'stretch',
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingTop: 15
  },
})