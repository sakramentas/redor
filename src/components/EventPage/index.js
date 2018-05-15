import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { Text, View, Image } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { RkButton } from 'react-native-ui-kitten';
import EventLocation from '../EventLocation/index';
import EventCategory from '../EventCategory/index';
import { openTicket } from '../../core/redux/Events/actions';
import {
  getEventTitleSelectedEvent,
  getEventDescriptionSelectedEvent,
  getEventPleaseNoteSelectedEvent,
  getEventImageSelectedEvent,
  getEventDateLongSelectedEvent,
} from '../../core/redux/Events/selectors';
import { styles } from './styles';

class EventPage extends Component {
  constructor(props) {
    super(props);

    this.renderParallaxForeground = this.renderParallaxForeground.bind(this);
    this.renderParallaxBackground = this.renderParallaxBackground.bind(this);
  }

  renderParallaxForeground() {
    const { name } = this.props.event;

    return (
      <View style={styles.artistInfo}>
        <Text style={styles.text}> {name} </Text>
      </View>
    );
  }

  renderParallaxBackground() {
    const { image } = this.props.event;

    return (
      <View key="background">
        <Image
          source={{ uri: image }}
          style={styles.headerBgImage}
        />
        <View style={styles.headerOverlay} />
      </View>
    );
  }

  render() {
    const {
      openTicket,
      description,
      url,
    } = this.props.event;
    const { event } = this.props;
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
              <Text style={subtext}> {event.dateTime}</Text>
            </View>
            <View style={tickets}>
              <RkButton onPress={() => openTicket(url)}>Find Tickets</RkButton>
            </View>
          </View>
          <Text style={eventDescription}> {description}</Text>
          {/*<Text style={subtext2}> {eventPleaseNote}</Text>*/}
          <EventCategory eventData={event} />
          <EventLocation eventData={event} />
        </View>
      </ParallaxScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  event: get(state, 'events.selected', {}),
});

const mapDispatchToProps = { openTicket };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventPage);
