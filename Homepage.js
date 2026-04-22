import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Image } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Homepage() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <TextInput style={styles.searchBox} placeholder="Search..." />
        <View style={styles.horizontalRuler} />
        {/* <Text style={styles.text}>Welcome to FlipIt!</Text> */}
        {/* <StatusBar style="auto" /> */}
        <View style={styles.plusCircleIcon}>
          <Image source={require("./assets/plus-circle.png")} />
          <Text style={styles.iconInstructText}>
            Tap to create your first card set
          </Text>
        </View>

        <View style={styles.navBar}>
          <TouchableOpacity>
            <Image source={require("./assets/home-navbar.png")} />
            <Text>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("./assets/home-navbar.png")} />
            <Text>Create</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("./assets/home-navbar.png")} />
            <Text>Library</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    paddingTop: 8,
    alignItems: 'center'
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
    top: 250
  }
});
