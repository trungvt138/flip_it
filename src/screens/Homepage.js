import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../components/Navbar';
import HorizontalRuler from '../components/HorizontalRuler';
import TextBox from '../components/TextBox';

export default function Homepage() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <TextBox placeholder="Search..." />
          <HorizontalRuler />
          {/* <Text style={styles.text}>Welcome to FlipIt!</Text> */}
          {/* <StatusBar style="auto" /> */}
          <View style={styles.plusCircleIcon}>
            <TouchableOpacity>
              <Image source={require("../../assets/plus-circle.png")} />
            </TouchableOpacity>
            <Text>
              Tap to create your first card set
            </Text>
          </View>
        </View>
        
        <NavBar />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 8,
    alignItems: 'center'
  },
  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  plusCircleIcon: {
    paddingTop: 212,
    alignItems: 'center'
  },
});
