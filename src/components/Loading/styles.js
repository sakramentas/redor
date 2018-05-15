import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  loadingIndicator: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    height: 180,
    transform: [{ scale: 1.5 }],
  },
  loadingText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    alignSelf: 'center',
  },
});
