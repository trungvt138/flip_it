import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homepage from './src/screens/Homepage';
import CreateSet from './src/screens/CreateSet';
import Practice from './src/screens/Practice';
import AppNavigator from './src/navigation/AppNavigator';
// import Library from './src/screens/Library';

export default function App() {
  return (
    <AppNavigator />
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});
