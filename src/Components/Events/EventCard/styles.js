import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  eventCard: {
    borderColor: '#000',
    height: 150,
    borderRadius: 5,
    flex: 1,
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: '#1f1d1c',
    overflow: 'hidden',
    position: 'relative',
  },
  eventBgImg: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 5,
    borderColor: '#000',
  },
  coverOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.4)',
    top: 0,
    left: 0
  },
  eventInfo: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100%',
    overflow: 'hidden',
  },
  eventInfoLeft: {
    flexDirection: 'column',
    flex: 3,
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0)',
    paddingBottom: 10,
  },
  eventInfoRight: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    margin: 10,
  },
  eventTitle: {
    color: '#FFF',
    fontSize: 22,
    paddingLeft: 5,
  },
  subtext: {
    color: '#ffb009',
    fontSize: 18,
    paddingLeft: 5
  },
  subtext2: {
    color: '#a9a9ab',
    fontSize: 17,
    paddingLeft: 5
  },
  dateTimeBox: {
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingBottom: 5,
    width: 70,
    borderColor: '#f9f9f9',
    borderWidth: 1,
    borderRadius: 5,
  },
  dateTimeBoxDay: {
    fontSize: 30,
    color: 'white',
    fontWeight: '700',
  },
  dateTimeBoxMonth: {
    fontSize: 20,
    color: 'white',
  },
  dateTimeBoxYear: {
    fontSize: 15,
    color: 'white',
  }
});