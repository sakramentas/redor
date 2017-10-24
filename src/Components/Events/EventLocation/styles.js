import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  venueLocation: {
    flexDirection: 'column',
    flex: 1,
    padding: 8,
    flexWrap: 'wrap',
  },
  venueName: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  venueAddress: {
    color: '#FFF',
    fontSize: 18,
  },
  venueCity: {
    color: '#FFF',
    fontSize: 16,
  },
  mapThumbnail: {
    width: '95%',
    height: 200,
    flex: 1,
    // marginTop: 20,
    margin: 10,
    padding: 10,
    borderRadius: 5,
    borderColor: '#000',
  },
});