import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Platform, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// Wir importieren die WordCard aus deinem components-Ordner
import WordCard from '../components/WordCard';

export default function SessionComplete({ route }) {
  const navigation = useNavigation();
  const { easy, repeat, repeatCards, cards, name } = route.params || {};

  return (
    // SafeAreaView durch normale View mit manuellem Top-Padding ersetzt
    <View style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* Header: Figma-Haken (jetzt als Image) & Titel */}
        <View style={styles.header}>
          <View style={styles.checkmarkCircle}>
            {/* Hier wird dein Figma Asset sicher geladen ohne abzustürzen */}
            <Image 
              source={require('../../assets/check-circle.svg.png')} 
              style={styles.checkmarkImage}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.sessionCompleteText}>Session complete!</Text>
        </View>

        {/* Graue Statistik-Box */}
        <View style={styles.summaryContainer}>
          <View style={styles.scoreRow}>
            <Text style={styles.correctText}>Correct answers:</Text>
            <Text style={styles.correctText}>{easy}</Text>
          </View>
          
          <View style={[styles.scoreRow, { marginBottom: 20 }]}>
            <Text style={styles.incorrectText}>Incorrect answers:</Text>
            <Text style={styles.incorrectText}>{repeat}</Text>
          </View>

          {/* Dynamischer Loop durch deine falschen Vokabeln */}
          <ScrollView>
            {repeatCards.map((card, index) => (
            <WordCard 
              key={index} 
              term={card.front} 
              translation={card.back} 
            />
          ))}
          </ScrollView>
          

          {/* Kleiner Pfeil-Indikator unten in der Box */}
          <View style={styles.arrowRow}>
            <Image
            // 1. require() lädt das Asset relativ zum Projektordner
            source={require('../../assets/Arrow up-circle.svg.png')}
    
            // 2. Das Styling bestimmt die Größe des Bildes
            style={styles.arrowImage}
    
            // 3. contain sorgt dafür, dass das Bild nicht verzerrt wird
            resizeMode="contain"
            />
            
         </View>
        </View>

        {/* Action-Buttons unten */}
        <View style={styles.buttonActionArea}>
          <View style={styles.splitButtons}>
            <TouchableOpacity style={styles.btnSecondary} onPress={() => navigation.replace('Practice', { cards: repeatCards, name: name })}>
              <Text style={styles.btnText}>Repeat incorrect</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSecondary} onPress={() => navigation.replace('Practice', { cards: cards, name: name })}>
              <Text style={styles.btnText}>Start over</Text>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity style={styles.btnPrimary} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.btnTextMain}>Done</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
    // Verhindert, dass der Inhalt unter der Statusleiste (Android/iOS) verschwindet
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 40,
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  checkmarkCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 4,
    borderColor: '#a78bfa',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  checkmarkImage: {
    width: 70,
    height: 70,
  },
  sessionCompleteText: {
    // fontFamily: 'Inter',
    fontSize: 28,
    fontWeight: '600',
    color: '#000000',
  },
  summaryContainer: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: '#e5e7eb',
    borderRadius: 28,
    padding: 24,
    marginBottom: 32,
  },
  scoreRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  correctText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#34c759',
  },
  incorrectText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#ec221f',
  },
  arrowRow: {
    alignItems: 'center',
    marginTop: 8,
  },
  arrowIcon: {
    fontSize: 18,
    color: '#4b5563',
    borderWidth: 1,
    borderColor: '#4b5563',
    borderRadius: 12,
    width: 24,
    height: 24,
    textAlign: 'center',
    lineHeight: 22,
  },
  buttonActionArea: {
    width: '100%',
    maxWidth: 340,
  },
  splitButtons: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  btnSecondary: {
    flex: 1,
    backgroundColor: '#9333ea',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
  },
  btnPrimary: {
    backgroundColor: '#34c759',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
  },
  btnText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
  btnTextMain: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});