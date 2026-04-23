import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import NavBar from './Navbar';

export default function Homepage() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <TextInput style={styles.searchBox} placeholder="Search..." />
          <View style={styles.horizontalRuler} />
          {/* <Text style={styles.text}>Welcome to FlipIt!</Text> */}
          {/* <StatusBar style="auto" /> */}
          <View style={styles.plusCircleIcon}>
            <TouchableOpacity>
              <Image source={require("../assets/plus-circle.png")} />
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
  searchBox: {
    alignSelf: 'stretch',
    height: 36,
    backgroundColor: '#D9D9D9',
    marginHorizontal: 30,
    borderRadius: 8,
    paddingLeft: 13,
    paddingTop: 10,
    textAlignVertical: 'center',
  },
  horizontalRuler: {
    alignSelf: 'stretch',
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingTop: 15
  },
  plusCircleIcon: {
    paddingTop: 212,
    alignItems: 'center'
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 360,
    height: 75,
    backgroundColor: '#D9D9D9',
  },
  iconWrapper: {
    padding: 3,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#9080F7',
    justifyContent: 'center',
    borderRadius: 5
  },
  navItem: {
    alignItems: 'center',
  },
  iconText: {
    color: '#9080F7'
  }
});
