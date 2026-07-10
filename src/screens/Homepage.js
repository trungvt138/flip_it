import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../components/Navbar';
import HorizontalRuler from '../components/HorizontalRuler';
import DailyGoalCard from '../components/DailyGoalCard';
import { useNavigation } from '@react-navigation/native';
import { useLearningBoxes } from '../hooks/useLearningBoxes';
import { useSettings } from '../hooks/useSettings';
import LearningBoxRecent from '../components/LearningBoxRecent';

export default function Homepage() {
  const navigation = useNavigation();
  const { learningBoxes } = useLearningBoxes();
  const { t, colors } = useSettings();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.content}>
          <View style={styles.goalHeader}>
            <DailyGoalCard />
          </View>
          <HorizontalRuler />
          {learningBoxes.length === 0 ? (
            <View style={styles.plusCircleIcon}>
              <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                <Image source={require("../../assets/plus-circle.png")} />
              </TouchableOpacity>
              <Text style={{ color: colors.text }}>
              {t.tapToCreateFirstSet}
              </Text>
            </View>
          ): (
            <View style={{ width: '100%', alignItems: 'center'}}>
              <Text style={{ width: '100%', paddingLeft: 30, marginTop: 20, marginBottom: 20, color: colors.text }}>
                {t.yourLatestSets}
              </Text>
              <View style={{ width: '100%', alignItems: 'center', paddingBottom: 30, gap: 25}}>
                {learningBoxes.slice().reverse().slice(-4).map((box, index) => (
                  <LearningBoxRecent
                    key={index}
                    name={box.name}
                    cardCount={box.cardCount}
                    cards={box.cards}
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
  goalHeader: {
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
});
