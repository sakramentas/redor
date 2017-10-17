import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  dateTimeBox: {
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    // height: 90,
    paddingBottom: 5,
    width: 70,
    borderColor: '#f9f9f9',
    borderWidth: 1,
    borderRadius: 5,
  },
  dateTimeBoxDay: {
    fontSize: 30,
    color: 'white',
    fontWeight: '700'
  },
  dateTimeBoxMonth: {
    fontSize: 20,
    color: 'white'
  },
  dateTimeBoxYear: {
    fontSize: 15,
    color: 'white'
  }
});