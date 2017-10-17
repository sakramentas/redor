import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export const EventLocation = ({ location: { name, address, city, country } }) => {
  const {
    venueLocation,
    venueName,
    venueAddress,
    venueCity
  } = styles;

  return (
    <View style={venueLocation}>
      <Text style={venueName}> {name}</Text>
      <Text style={venueAddress}> {address.line1}</Text>
      <Text style={venueCity}> {city.name}, {country.name}</Text>
    </View>
  )
};
