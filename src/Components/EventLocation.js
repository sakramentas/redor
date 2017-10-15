import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export const EventLocation = (props) => {
  const { name, address, city, country } = props.location;
  console.log("eventVenue", name);
  return (
    <View style={styles.eventLocation}>
      <Text style={styles.venue}> {name}</Text>
      <Text style={styles.address}> {address.line1}</Text>
      <Text style={styles.city}> {city.name}, {country.name}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  eventLocation: {
    flexDirection: 'column',
    flex: 1,
    height: 30,
    padding: 8,
    flexWrap: 'wrap',
    // alignItems: 'center',
    // alignSelf: 'center',
    // justifyContent: 'center',
  },
  venue: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    // padding: 10,
  },
  address: {
    color: '#FFF',
    fontSize: 18,
    // padding: 10,
  },
  city: {
    color: '#FFF',
    fontSize: 16,
    // padding: 10,
  },
  // country: {
  //   color: '#FFF',
  //   fontSize: 20,
  //   padding: 10,
  // },
});
