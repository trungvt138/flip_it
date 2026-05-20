import { StyleSheet, Text, View } from "react-native";

export default function ProgressBar({ progress, cardCount}) {
    return (
        <View style={styles.container}>
            <View style={styles.progressBar}>
                <View style={{ flex: progress, backgroundColor: '#9080F7', borderTopLeftRadius: 20, borderBottomLeftRadius: 20}}></View>
                <View style={{ flex: cardCount - progress, backgroundColor: '#D9D9D9', borderTopRightRadius: 20, borderBottomRightRadius: 20}}></View>
                
            </View>
            <Text style={{alignSelf: 'center', marginTop: 10}}>{progress}/{cardCount}</Text>
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