import React from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { StyleSheet, Text, View, Image } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { RkButton, RkText, RkTheme, RkTextInput, RkModalImg } from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/Ionicons';

RkTheme.setType('RkText','hero',{
  fontSize: 80
});

RkTheme.setType('RkTextInput', 'rounded', {
  input: {
    backgroundColor: 'white',
    marginLeft: 0,
    marginHorizontal: 10,
    // borderRadius: 5
  },
  // color: 'gray',
  backgroundColor: 'white',
  // borderRadius: 10,
  container: {
    paddingHorizontal: 20
  }
});

RkTheme.setType('RkModalImg','small',{
  container: {
    width: 400,
    height: 400
  },
  img:{
    width: 50,
    height: 50,
    borderRadius: 10
  }
});

export const EventPage = (props) => {
  const images2 = props.event.images.map(img => img.url);

  return (
    <ParallaxScrollView
      backgroundColor="black"
      contentBackgroundColor="black"
      parallaxHeaderHeight={200}
      renderForeground={() => (
        <View style={styles.artistInfo}>
          <Text style={styles.text}> {props.event.name} </Text>
        </View>
      )}
      renderBackground={() => (
        <View key="background">
          <Image source={{
            uri: props.event.images[8].url,
            width: '100%',
            height: 400,
            resizeMode: 'cover',
          }}
          />
          <View style={{
            position: 'absolute',
            top: 0,
            width: '100%',
            backgroundColor: 'rgba(0,0,0,.4)',
            height: 400
          }}
          />
        </View>
      )}
    >
      <View style={{ height: 300 }}>
        <View style={styles.eventInfo}>
          <View style={styles.dateTime}>
            <Text style={styles.subtext}> {props.event.dates.start.localDate}</Text>
          </View>
          <View style={styles.tickets}>

          </View>
        </View>
        <Text style={styles.subtext}> {props.event._embedded.venues[0].name} </Text>
        <Text style={styles.subtext}> {props.event._embedded.venues[0].city.name}</Text>
        <RkButton>Click me!</RkButton>
        <RkText rkType='primary large'>Danger and Large</RkText>
        <RkTextInput rkType='rounded' label={<Icon name={'ios-search'}/>} />
        <RkModalImg rktype="small" source={images2} index={0} />
      </View>
    </ParallaxScrollView>

  )
};

const mapStateToProps = state => ({
  event: get(state, 'events.selected', {}),
});

export default connect(mapStateToProps, {})(EventPage);


const styles = StyleSheet.create({
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
  coverImg: {
    width: 300,
    height: 300,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  eventInfo: {
    flexDirection: 'row',
    flex: 1,
    height: 70,
    borderWidth: 0.5,
    borderTopColor: 'gray',
    borderBottomColor: 'gray',
  },
  dateTime: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  tickets: {
    flex: 1,
    borderWidth: 0.5,
    borderLeftColor: 'gray',
  },
  artistInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 28,
    paddingLeft: 5,
    flex: 1,
    paddingTop: 80,
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  subtext: {
    color: '#FFF',
    // fontWeight: '600',
    fontSize: 15,
    paddingLeft: 5,
    flex: 1,
    flexDirection: 'row'
  }
});
