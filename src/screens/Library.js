
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TextBox from '../components/TextBox';
import HorizontalRuler from '../components/HorizontalRuler';
import Navbar from '../components/Navbar'
import LearningBox from '../components/LearningBox';

export default function Library() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <TextBox style={styles.textBox} placeholder="Search..." />
                    <HorizontalRuler />
                    <Text style={styles.sortText}> Sort by: Newest first </Text>
                    
                    <ScrollView style={{width: '100%'}} contentContainerStyle={{alignItems: 'center'}}>
                        <LearningBox />
                        <LearningBox />
                    </ScrollView>
                </View>
                <Navbar />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 8,
        alignItems: "center",
    },
    content: {
        flex: 1,
        width: "100%",
        alignItems: "center",
    },
    textBox: {
    marginHorizontal: 30
    },
    sortText: {
        marginLeft: 30,
        marginTop: 12,
        width: 117,
        height: 22,
        fontSize: 12,
        color: 'black',
        alignSelf: 'flex-start'
    }
});