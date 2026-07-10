export const lightColors = {
  mode: 'light',
  background: '#ffffff',
  surface: '#f5f5f7',
  card: '#D9D9D9',
  cardAlt: '#e5e7eb',
  boxBackground: '#ede9fe',
  text: '#000000',
  textSecondary: '#888888',
  border: '#e5e7eb',
  primary: '#9080F7',
  primaryLight: 'rgba(144, 128, 247, 0.15)',
  navBackground: '#ffffff',
  danger: '#E53935',
  success: '#1db954',
};

export const darkColors = {
  mode: 'dark',
  background: '#121214',
  surface: '#1c1c1f',
  card: '#2c2c30',
  cardAlt: '#26262a',
  boxBackground: '#2a2440',
  text: '#f5f5f5',
  textSecondary: '#a0a0a5',
  border: '#333338',
  primary: '#9080F7',
  primaryLight: 'rgba(144, 128, 247, 0.25)',
  navBackground: '#1c1c1f',
  danger: '#E53935',
  success: '#1db954',
};

export function getColors(theme) {
  return theme === 'dark' ? darkColors : lightColors;
}
