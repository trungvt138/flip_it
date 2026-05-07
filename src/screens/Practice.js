import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from "react-native";
import ProgressBar from "../components/ProgressBar";

export default function Practice() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.head}>
            <Text style={styles.screenTitle}>Web Programming</Text>
            <TouchableOpacity style={styles.closeButton}>
              <Image source={require("../../assets/X.png")} />
            </TouchableOpacity>
        </View>
        
        <ProgressBar />
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
  head: {
    flexDirection: "row",
    justifyContent: 'space-around',
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  screenTitle: {
    fontSize: 24,
    textAlign: "center",
    flex: 1,
    maxWidth: "90%",
  },
  closeButton: {
    
  },
});