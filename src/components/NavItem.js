import { StyleSheet, Text, TouchableOpacity, Animated } from 'react-native';
import { useRef, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function NavItem({ label, iconName, isActive, onPress }) {
  const anim = useRef(new Animated.Value(isActive ? 1 : 0)).current;

  useEffect(() => {
    Animated.spring(anim, {
      toValue: isActive ? 1 : 0,
      useNativeDriver: true,
      tension: 60,
      friction: 8,
    }).start();
  }, [isActive]);

  const pillScaleX = anim.interpolate({ inputRange: [0, 1], outputRange: [0.3, 1] });
  const pillOpacity = anim.interpolate({ inputRange: [0, 1], outputRange: [0, 1] });
  const iconScale = anim.interpolate({ inputRange: [0, 1], outputRange: [1, 1.15] });

  return (
    <TouchableOpacity style={styles.navItem} onPress={onPress} activeOpacity={0.8}>
      <Animated.View style={[styles.pill, { opacity: pillOpacity, transform: [{ scaleX: pillScaleX }] }]} />
      <Animated.View style={{ transform: [{ scale: iconScale }] }}>
        <Ionicons
          name={isActive ? iconName : `${iconName}-outline`}
          size={24}
          color={isActive ? '#9080F7' : '#888'}
        />
      </Animated.View>
      <Text style={[styles.label, isActive && styles.activeLabel]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 8,
  },
  pill: {
    position: 'absolute',
    top: 4,
    width: 68,
    height: 34,
    borderRadius: 17,
    backgroundColor: 'rgba(144, 128, 247, 0.15)',
  },
  label: {
    fontSize: 11,
    marginTop: 3,
    color: '#888',
  },
  activeLabel: {
    color: '#9080F7',
    fontWeight: '600',
  },
});
