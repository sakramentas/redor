import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export const EventsList = (props) => {
  return (
    <TouchableOpacity
      style={styles.card}
      key={props.event.id}
      onPress={() => props.handleEventClick(props.event.id)}
    >
      <Image source={{ uri: props.event.images[3].url }} style={styles.coverImg} />
      <View style={styles.artistInfo}>
        <Text style={styles.text}> {props.event.name} </Text>
        <Text style={styles.subtext}> {props.event._embedded.venues[0].name} </Text>
        <Text style={styles.subtext}> {props.event._embedded.venues[0].city.name}</Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  card: {
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5,
    flex: 1,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: '#1f1d1c',
    padding: 8
  },
  coverImg: {
    width: 100,
    height: 100,
    // flex: 1,
    flexDirection: 'column'
  },
  artistInfo: {
    // flex: 1
  },
  text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
    paddingLeft: 5
  },
  subtext: {
    color: 'white',
    // fontWeight: '600',
    fontSize: 15,
    paddingLeft: 5
  }
});
