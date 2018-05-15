import React from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { DateTimeBox } from '../DateTimeBox/index';
import { selectEvent } from '../../core/redux/Events/actions';
import {
  getEventDateTime,
  getEventTime,
  getEventImage,
  getEventTitle,
  getCategoryName,
} from '../../core/redux/Events/selectors';
import { styles } from './styles';

const EventCard = (props) => {
  const {
    name,
    image,
    dateTime,
  } = props.event;
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

  return (
    <TouchableOpacity
      style={eventCard}
      onPress={() => props.selectEvent(props.event)}
    >
      <Image
        source={{ uri: image }}
        style={eventBgImg}
      />
      <View style={coverOverlay} />
      <View style={eventInfo}>
        <View style={eventInfoLeft}>
          <Text
            style={eventTitle}
            numberOfLines={1}
          >
            {name}
          </Text>
          <Text style={subtext}>
            {dateTime}
          </Text>
          <Text style={subtext}>
            {'test'}
          </Text>
        </View>
        <View style={eventInfoRight}>
          <DateTimeBox dateTime={dateTime} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = { selectEvent };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventCard);
