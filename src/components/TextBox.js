import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TextBox({ placeholder, value, onChangeText, onFilterPress, filterActive, style }) {
  return (
    <View style={[styles.wrapper, style]}>
      {onFilterPress && <Ionicons name="search-outline" size={16} color="#888" style={styles.searchIcon} />}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#888"
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
      {onFilterPress && (
        <TouchableOpacity onPress={onFilterPress} style={styles.filterButton}>
          <Ionicons
            name={filterActive ? 'funnel' : 'funnel-outline'}
            size={18}
            color={filterActive ? '#9080F7' : '#888'}
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
    backgroundColor: '#D9D9D9',
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
    color: '#333',
  },
  filterButton: {
    paddingLeft: 8,
  },
});
