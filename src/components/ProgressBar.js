import { StyleSheet, Text, View } from "react-native";

export default function ProgressBar() {
    return (
        <View style={{flex: 1}}>
            <View style={styles.progressBar}>
                <View style={{ flex: 3, backgroundColor: '#9080F7'}}></View>
                <View style={{ flex: 7, backgroundColor: '#D9D9D9'}}></View>
            </View>
            <Text>3/10</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    progressBar: {
        height: 10,
        flexDirection: 'row',
        
    }
})