import { StyleSheet, Text, View } from "react-native";
import { useSettings } from "../hooks/useSettings";

export default function ProgressBar({ progress, cardCount}) {
    const { colors } = useSettings();
    return (
        <View style={styles.container}>
            <View style={styles.progressBar}>
                <View style={{ flex: progress, backgroundColor: colors.primary, borderTopLeftRadius: 20, borderBottomLeftRadius: 20}}></View>
                <View style={{ flex: cardCount - progress, backgroundColor: colors.card, borderTopRightRadius: 20, borderBottomRightRadius: 20}}></View>

            </View>
            <Text style={{alignSelf: 'center', marginTop: 10, color: colors.text}}>{progress}/{cardCount}</Text>
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