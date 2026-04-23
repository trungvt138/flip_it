import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Navbar from '../components/Navbar';
import HorizontalRuler from '../components/HorizontalRuler';
import TextBox from '../components/TextBox';

export default function CreateSet() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.head}>
            <TouchableOpacity>
              <Image source={require('../../assets/trash.png')} />
            </TouchableOpacity>
            <Text style={styles.screenTitle}>Create New Set</Text>
            <TouchableOpacity>
              <Image source={require('../../assets/check.png')} />
            </TouchableOpacity>
          </View>
          <HorizontalRuler />

          <View style={styles.body}>
            <Text>Set Name:</Text>
            <TextBox />
            <ScrollView>

            </ScrollView>
          </View>
        </View>



        <Navbar />
      </SafeAreaView>
    </SafeAreaProvider>
  )
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
  head: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  screenTitle: {
    fontSize: 24
  },
  body: {
    width: '100%',
    
    paddingTop: 20,
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  }
});