import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../components/Navbar';
import HorizontalRuler from '../components/HorizontalRuler';
import TextBox from '../components/TextBox';
import LearningBox from '../components/LearningBox';
import { useNavigation } from '@react-navigation/native';
import { useLearningBoxes } from '../hooks/useLearningBoxes';
import LearningBoxRecent from '../components/LearningBoxRecent';

export default function Homepage() {
  const navigation = useNavigation();
  const { learningBoxes, getLastLearningBox } = useLearningBoxes();
  const lastBox = getLastLearningBox();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <TextBox style={styles.textBox} placeholder="Search..." />
          <HorizontalRuler />
          {learningBoxes.length === 0 ? (
            <View style={styles.plusCircleIcon}>
              <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                <Image source={require("../../assets/plus-circle.png")} />
              </TouchableOpacity>
              <Text>
              Tap to create your first card set
              </Text>
            </View>
          ): (
            <View style={{ width: '100%', alignItems: 'center'}}>
              <View style={{ width: '100%', alignItems: 'center', padding: 30 , paddingBottom: 15}}>
                <LearningBox
                  name={lastBox.name}
                  date={lastBox.date}
                  cardCount={lastBox.cardCount} 
                  cards={lastBox.cards}
                />
              </View>
              <HorizontalRuler />
              <Text style={{ width: '100%', paddingLeft: 30, marginTop: 12, marginBottom: 20}}>
                Your latest card sets:
              </Text>
              <View style={{ width: '100%', alignItems: 'center', paddingBottom: 30, gap: 25}}>
                {learningBoxes.slice().reverse().slice(-4).map((box, index) => (
                  <LearningBoxRecent
                    key={index}
                    name={box.name}
                    cardCount={box.cardCount}
                  />
                ))}
              </View>
            </View>
          )}

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
    marginTop: 212,
    alignItems: 'center'
  },
  textBox: {
    marginHorizontal: 30
  }
});
