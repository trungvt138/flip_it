import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from "react-native";
import ProgressBar from "../components/ProgressBar";
import LCard from "../components/LCard";
import { useNavigation } from "@react-navigation/native";

export default function Practice() {
  const navigation = useNavigation();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.screenTitle}>Web Programming</Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => navigation.goBack()}
          >
            <Image source={require("../../assets/X.png")} />
          </TouchableOpacity>
        </View>

        <ProgressBar />

        <LCard />
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
    justifyContent: "space-around",
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
  closeButton: {},
});