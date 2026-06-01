import { View, Text, StyleSheet } from 'react-native';

export default function WordCard({ term, translation }) {
  return (
    <View style={styles.wordCard}>
      <Text style={styles.termText}>{term}</Text>
      <Text style={styles.translationText}>{translation}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wordCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Transparentes Weiß aus deinem Figma-Design
    borderWidth: 1,
    borderColor: '#c7d2fe', // Helllila Rahmen
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    width: '100%',
  },
  termText: {
    // fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 4,
  },
  translationText: {
    // fontFamily: 'Inter',
    fontSize: 14,
    color: '#4b5563',
  },
});