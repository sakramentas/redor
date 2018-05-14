import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { Text, View, Image } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { RkButton } from 'react-native-ui-kitten';
import EventLocation from '../EventLocation';
import EventCategory from '../EventCategory';
import { openTicket } from '../../../redux/Events/actions';
import {
  getEventTitleSelectedEvent,
  getEventDescriptionSelectedEvent,
  getEventPleaseNoteSelectedEvent,
  getEventImageSelectedEvent,
  getEventDateLongSelectedEvent,
} from '../../../redux/Events/selectors';
import { styles } from './styles';

class EventPage extends Component {
  constructor(props) {
    super(props);

    this.renderParallaxForeground = this.renderParallaxForeground.bind(this);
    this.renderParallaxBackground = this.renderParallaxBackground.bind(this);
  }

  renderParallaxForeground() {
    const { eventTitle } = this.props;

    return (
      <View style={styles.artistInfo}>
        <Text style={styles.text}> {eventTitle} </Text>
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
        <View style={styles.headerOverlay} />
      </View>
    );
  }

  render() {
    const {
      event,
      eventTime,
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
        backgroundColor="#0e0e0e"
        contentBackgroundColor="#0e0e0e"
        parallaxHeaderHeight={200}
        renderForeground={this.renderParallaxForeground}
        renderBackground={this.renderParallaxBackground}
      >
        <View style={{ backgroundColor: '#0e0e0e' }}>
          <View style={eventInfo}>
            <View style={dateTime}>
              <Text style={subtext}> {eventTime}</Text>
            </View>
            <View style={tickets}>
              <RkButton onPress={() => openTicket(event.url)}>Find Tickets</RkButton>
            </View>
          </View>
          <Text style={eventDescription}> {this.props.eventDescription}</Text>
          <Text style={subtext2}> {eventPleaseNote}</Text>
          <EventCategory eventData={event} />
          <EventLocation eventData={event} />
        </View>
      </ParallaxScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  event: get(state, 'events.selected', {}),
  eventTitle: getEventTitleSelectedEvent(state),
  eventTime: getEventDateLongSelectedEvent(state),
  eventImage: getEventImageSelectedEvent(state),
  eventDescription: getEventDescriptionSelectedEvent(state),
  eventPleaseNote: getEventPleaseNoteSelectedEvent(state),
});

const mapDispatchToProps = { openTicket };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventPage);
