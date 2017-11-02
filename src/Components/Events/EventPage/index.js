import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { Text, View, Image } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { RkButton } from 'react-native-ui-kitten';
import EventLocation from '../EventLocation';
import EventCategory from '../EventCategory';
import { openTicket } from '../actions';
import {
  getEventTitle,
  getEventDescriptionSelectedEvent,
  getEventPleaseNoteSelectedEvent,
  getEventImageSelectedEvent,
  getEventDateLong,
} from '../selectors';
import { styles } from './styles';

class EventPage extends Component {
  constructor(props) {
    super(props);

    this.renderParallaxForeground = this.renderParallaxForeground.bind(this);
    this.renderParallaxBackground = this.renderParallaxBackground.bind(this);
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
    const { eventImage } = this.props;

    return (
      <View key="background">
        <Image
          source={{ uri: eventImage }}
          style={styles.headerBgImage}
        />
        <View style={styles.headerOverlay}/>
      </View>
    );
  }

  render() {
    const {
      event,
      eventDateTime,
      openTicket,
      eventPleaseNote,
    } = this.props;
    const {
      eventInfo,
      dateTime,
      subtext,
      tickets,
      eventDescription,
      subtext2,
    } = styles;


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
              <Text style={subtext}> {eventDateTime}</Text>
            </View>
            <View style={tickets}>
              <RkButton onPress={() => openTicket(event.url)}>Find Tickets</RkButton>
            </View>
          </View>
          <Text style={eventDescription}> {this.props.eventDescription}</Text>
          <Text style={subtext2}> {eventPleaseNote}</Text>
          <EventCategory eventData={event}/>
          <EventLocation eventData={event}/>
        </View>
      </ParallaxScrollView>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  event: get(state, 'events.selected'),
  eventDateTime: getEventDateLong(state, ownProps),
  eventImage: getEventImageSelectedEvent(state),
  eventDescription: getEventDescriptionSelectedEvent(state),
  eventPleaseNote: getEventPleaseNoteSelectedEvent(state),
});

const mapDispatchToProps = { openTicket };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventPage);
