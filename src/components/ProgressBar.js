import { StyleSheet, Text, View } from "react-native";

export default function ProgressBar() {
    return (
        <View style={styles.progressBar}>
            <View style={{flex: 3, backgroundColor: '#9080F7', alignSelf: 'stretch'}}></View>
            <View style={{flex: 7, backgroundColor: '#D9D9D9', alignSelf: 'stretch'}}></View>
            <Text>3/10</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    progressBar: {
        flexDirection: 'row'
    }
})