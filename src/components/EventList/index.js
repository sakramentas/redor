import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import EventCard from '../../components/EventCard';
import styles from './styles';

const EventList = ({ data }) => {
  const {
    listContainer,
    listTitle,
  } = styles;

  return (
    <View style={listContainer}>
      <Text style={listTitle}>Next Events</Text>
      {Object.keys(data).map(event => (
        <EventCard
          event={data[event]}
          key={event}
        />
      ))}
    </View>
  );
};

export default EventList;

