import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get, isArray, has } from 'lodash';
import { StyleSheet, Text, View, Image, Linking} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { RkButton, RkText, RkTheme, RkTextInput, RkModalImg } from 'react-native-ui-kitten';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import { EventLocation } from './EventLocation';

RkTheme.setType('RkText', 'hero', {
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

RkTheme.setType('RkModalImg', 'small', {
  container: {
    width: 400,
    height: 400
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 10
  }
});

class EventPage extends Component {
  constructor(props) {
    super(props);

    this.handleOpenTicket = this.handleOpenTicket.bind(this);
    this.buildDate = this.buildDate.bind(this);
  }


  handleOpenTicket(){
    Linking.openURL(this.props.event.url)
      .catch(err => console.error('An error occurred', err));
  };

  buildDate() {
    const obj = this.props.event;
    let startTimeEventbrite = (obj) => obj.start ? obj.start.local : null;
    let startTimeTicketmaster = (obj) => obj.dates ? `${obj.dates.start.localDate}T${obj.dates.start.localTime}` : null;
    let getStartTime = (obj) => startTimeEventbrite(obj) || startTimeTicketmaster(obj);

    console.log("dateewee", moment(getStartTime(obj)).format("MMM Do YY, h:mm a"));

    return moment(getStartTime(obj)).format("MMM Do YY, h:mm a")
  }

  render() {
    const { event } = this.props;
    const eventTitle = event.name.text ? event.name.text : event.name;
    const eventDescription = event.description ? event.description.text : event.info ? event.info : '';
    const eventPleaseNote = event.pleaseNote ? event.pleaseNote : '';
    const eventImage = isArray(event.images) ? event.images[2].url : event.logo ? event.logo.url : '';
    const eventVenue = get(event, '_embedded.venues[0]', null);

    return (
      <ParallaxScrollView
        backgroundColor="black"
        contentBackgroundColor="black"
        parallaxHeaderHeight={200}
        renderForeground={() => (
          <View style={styles.artistInfo}>
            <Text style={styles.text}> {eventTitle} </Text>
          </View>
        )}
        renderBackground={() => (
          <View key="background">
            <Image source={{
              uri: eventImage,
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
        <View style={{ height: 500 }}>
          <View style={styles.eventInfo}>
            <View style={styles.dateTime}>
              <Text style={styles.subtext}> {this.buildDate()}</Text>
            </View>
            <View style={styles.tickets}>
              <RkButton onPress={this.handleOpenTicket}>Find Tickets</RkButton>
            </View>
          </View>
          <Text style={styles.eventDescription}> {eventDescription}</Text>
          <Text style={styles.subtext2}> {eventPleaseNote}</Text>
          {eventVenue && <EventLocation location={eventVenue}/>}
          {/*<Text style={styles.subtext}> {event.venue_id} </Text>*/}
          {/*<Text style={styles.subtext2}> {event.status}</Text>*/}
          {/*<RkButton>Click me!</RkButton>*/}
          {/*<RkText rkType='primary large'>Danger and Large</RkText>*/}
          {/*<RkTextInput rkType='rounded' label={<Icon name={'ios-search'}/>} />*/}
          {/*<RkModalImg rktype="small" source={images2} index={0} />*/}
        </View>
      </ParallaxScrollView>

    )
  }
}

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
    padding: 10,
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
  eventDescription: {
    color: '#FFF',
    fontSize: 16,
    padding: 10,
    // flexDirection: 'row'
  },
  subtext: {
    color: '#FFF',
    // fontWeight: '600',
    fontSize: 15,
    paddingLeft: 5,
    // flex: 1,
    // flexDirection: 'row'
  },
  subtext2: {
    color: '#FFF',
    // fontWeight: '600',
    fontSize: 14,
    padding: 10,
    // flex: 1,
    // flexDirection: 'row'
  }
});
