import { StyleSheet, Text, View } from "react-native";

export default function ProgressBar() {
    return (
        <View style={styles.container}>
            <View style={styles.progressBar}>
                <View style={{ flex: 3, backgroundColor: '#9080F7', borderTopLeftRadius: 20, borderBottomLeftRadius: 20}}></View>
                <View style={{ flex: 7, backgroundColor: '#D9D9D9', borderTopRightRadius: 20, borderBottomRightRadius: 20}}></View>
                
            </View>
            <Text style={{alignSelf: 'center', marginTop: 10}}>3/10</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        paddingHorizontal: 30,
        justifyContent: 'center',
        marginTop: 31,
    },
    progressBar: {
        height: 10,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
    },
    
})