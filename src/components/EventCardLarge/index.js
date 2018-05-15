import React from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { DateTimeBox } from '../DateTimeBox';
import { selectEvent } from '../../../redux/Events/actions';
import {
  getEventDateTime,
  getEventTime,
  getEventImage,
  getEventTitle,
  getCategoryName,
} from '../../../redux/Events/selectors';
import { styles } from './styles';
import {
  transformDateFull,
  transformTimefull
} from '../../../shared/helpers';

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
    selectEvent,
    eventCategoryName,
  } = props;

  return (
    <TouchableOpacity
      style={eventCard}
      key={event.id}
      onPress={() => selectEvent(event)}
    >
      <Image
        source={{ uri: event.images[0].url }}
        style={eventBgImg}
      />
      <View style={coverOverlay} />
      <View style={eventInfo}>
        <View style={eventInfoLeft}>
          <Text
            style={eventTitle}
            numberOfLines={1}
          >
            {event.name}
          </Text>
          <Text style={subtext}>
            {transformTimefull(event.dates.start.dateTime)}
          </Text>
          <Text style={subtext}>
            {eventCategoryName}
          </Text>
        </View>
        <View style={eventInfoRight}>
          <DateTimeBox dateTime={event.dates.start.dateTime} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const mapStateToProps = (state, ownProps) => ({
  eventDateTime: getEventDateTime(state, ownProps),
  eventTime: getEventTime(state, ownProps),
  eventImage: getEventImage(state, ownProps),
  eventTitle: getEventTitle(state, ownProps),
  eventCategoryName: getCategoryName(state, ownProps),
});

const mapDispatchToProps = { selectEvent };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventCardLarge);
