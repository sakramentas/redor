import React from 'react';
import moment from 'moment';
import { View, Text } from 'react-native';
import { styles } from './styles';

export const DateTimeBox = ({ dateTime }) => {
  const day = moment(dateTime).format("DD");
  const month = moment(dateTime).format("MMM");
  const year = moment(dateTime).format("YYYY");

  return (
    <View style={styles.dateTimeBox}>
      <Text style={styles.dateTimeBoxDay}>{day}</Text>
      <Text style={styles.dateTimeBoxMonth}>{month}</Text>
      <Text style={styles.dateTimeBoxYear}>{year}</Text>
    </View>
  )
};