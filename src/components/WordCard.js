import { View, Text, StyleSheet } from 'react-native';
import { useSettings } from '../hooks/useSettings';

export default function WordCard({ term, translation }) {
  const { colors } = useSettings();
  return (
    <View style={[styles.wordCard, { backgroundColor: colors.surface, borderColor: colors.primary }]}>
      <Text style={[styles.termText, { color: colors.text }]}>{term}</Text>
      <Text style={[styles.translationText, { color: colors.textSecondary }]}>{translation}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wordCard: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    width: '100%',
  },
  termText: {
    // fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  translationText: {
    // fontFamily: 'Inter',
    fontSize: 14,
  },
});