import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5,
    flex: 1,
    marginBottom: 10,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#1f1d1c',
    padding: 8
  },
  headerBgImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  headerOverlay: {
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,.4)',
    height: 400
  },
  coverImg: {
    width: 300,
    height: 300,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  eventInfo: {
    flexDirection: 'row',
    // flex: 1,
    height: 80,
    borderWidth: 0.5,
    borderTopColor: 'gray',
    borderBottomColor: 'gray',
  },
  dateTime: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // padding: 10,
    justifyContent: 'center',
  },
  tickets: {
    flex: 1,
    borderWidth: 0.5,
    borderLeftColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  artistInfo: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 25,
    textAlign: 'center'
  },
  eventDescription: {
    color: '#FFF',
    fontSize: 16,
    padding: 10,
    // flexDirection: 'row'
  },
  subtext: {
    color: '#FFF',
    fontSize: 20,
  },
  subtext2: {
    color: '#FFF',
    fontSize: 14,
    padding: 10,
  }
});
