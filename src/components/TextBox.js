import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSettings } from '../hooks/useSettings';

export default function TextBox({ placeholder, value, onChangeText, onFilterPress, filterActive, style }) {
  const { colors } = useSettings();
  return (
    <View style={[styles.wrapper, { backgroundColor: colors.card }, style]}>
      {onFilterPress && <Ionicons name="search-outline" size={16} color={colors.textSecondary} style={styles.searchIcon} />}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.textSecondary}
        style={[styles.input, { color: colors.text }]}
        value={value}
        onChangeText={onChangeText}
      />
      {onFilterPress && (
        <TouchableOpacity onPress={onFilterPress} style={styles.filterButton}>
          <Ionicons
            name={filterActive ? 'funnel' : 'funnel-outline'}
            size={18}
            color={filterActive ? colors.primary : colors.textSecondary}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 36,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 6,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 14,
  },
  filterButton: {
    paddingLeft: 8,
  },
});
