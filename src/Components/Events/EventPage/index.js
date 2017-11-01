import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { Text, View, Image, Linking } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { RkButton } from 'react-native-ui-kitten';
import EventLocation from '../EventLocation';
import EventCategory from '../EventCategory';
import {
  getEventTitle,
  getEventDescription,
  getEventPleaseNote,
  getEventImageSelectedEvent,
  getEventDateLong,
  getEventDateTime,
} from '../selectors';
import { styles } from './styles';

class EventPage extends Component {
  constructor(props) {
    super(props);

    this.handleOpenTicket = this.handleOpenTicket.bind(this);
    this.renderParallaxForeground = this.renderParallaxForeground.bind(this);
    this.renderParallaxBackground = this.renderParallaxBackground.bind(this);
  }

  handleOpenTicket() {
    Linking
      .openURL(this.props.event.url)
      .catch(err => console.error('An error occurred', err));
  }

  renderParallaxForeground() {
    const { event } = this.props;

    return (
      <View style={styles.artistInfo}>
        <Text style={styles.text}> {getEventTitle(event)} </Text>
      </View>
    );
  }

  renderParallaxBackground() {
    const { event, eventImage } = this.props;

    return (
      <View key="background">
        <Image
          source={{ uri: eventImage }}
          style={styles.headerBgImage}
        />
        <View style={styles.headerOverlay} />
      </View>
    );
  }

  render() {
    const { event, eventDateTime } = this.props;
    const {
      eventInfo,
      dateTime,
      subtext,
      tickets,
      eventDescription,
      subtext2,
    } = styles;

    if (event) {
      return (
        <ParallaxScrollView
          backgroundColor="black"
          contentBackgroundColor="black"
          parallaxHeaderHeight={200}
          renderForeground={this.renderParallaxForeground}
          renderBackground={this.renderParallaxBackground}
        >
          <View>
            <View style={eventInfo}>
              <View style={dateTime}>
                <Text style={subtext}> {getEventDateLong(eventDateTime)}</Text>
              </View>
              <View style={tickets}>
                <RkButton onPress={this.handleOpenTicket}>Find Tickets</RkButton>
              </View>
            </View>
            <Text style={eventDescription}> {getEventDescription(event)}</Text>
            <Text style={subtext2}> {getEventPleaseNote(event)}</Text>
            <EventCategory eventData={event}/>
            <EventLocation eventData={event}/>
          </View>
        </ParallaxScrollView>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  event: get(state, 'events.selected'),
  eventDateTime: getEventDateTime(state, ownProps),
  eventImage: getEventImageSelectedEvent(state),
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventPage);
