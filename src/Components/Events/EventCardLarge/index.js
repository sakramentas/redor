import React from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { DateTimeBox } from '../DateTimeBox';
import { selectEvent } from '../actions';
import {
  getEventDateTime,
  getEventTime,
  getEventImage,
  getEventTitle,
} from '../selectors';
import { styles } from './styles';

const EventCardLarge = (props) => {
  const { event } = props;
  const {
    eventCard,
    eventBgImg,
    coverOverlay,
    eventInfo,
    eventInfoLeft,
    eventTitle,
    subtext,
    subtext2,
    eventInfoRight,
  } = styles;

  const {
    eventDateTime,
    eventTime,
    eventImage,
    selectEvent
  } = props;

  return (
    <TouchableOpacity
      style={eventCard}
      key={event.id}
      onPress={() => selectEvent(event.id)}
    >
      <Image
        source={{ uri: eventImage }}
        style={eventBgImg}
      />
      <View style={coverOverlay} />
      <View style={eventInfo}>
        <View style={eventInfoLeft}>
          <Text
            style={eventTitle}
            numberOfLines={1}
          >
            {props.eventTitle}
          </Text>
          <Text style={subtext}>
            {eventTime}
          </Text>
        </View>
        <View style={eventInfoRight}>
          <DateTimeBox dateTime={eventDateTime} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const mapStateToProps = (state, ownProps) => ({
  eventDateTime: getEventDateTime(state, ownProps),
  eventTime: getEventTime(ownProps),
  eventImage: getEventImage(state, ownProps),
  eventTitle: getEventTitle(state, ownProps),
});

const mapDispatchToProps = { selectEvent };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventCardLarge);
