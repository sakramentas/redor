import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';

export const EventsList = (props) => {
  const buildDate = () => {
    const localDate = props.event.dates.start.localDate;
    const day = moment(localDate).format("DD");
    const month = moment(localDate).format("MMM");
    const year = moment(localDate).format("YYYY");

    return (
      <View style={{
        flexDirection: 'column',
        alignSelf: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        height: 80,
        width: 70,
        borderColor: '#f9f9f9',
        borderWidth: 1,
        borderRadius: 5,
      }}>
        <Text style={{ fontSize: 30, color: 'white', fontWeight: '700' }}>{day}</Text>
        <Text style={{ fontSize: 20, color: 'white' }}>{month}</Text>
        <Text style={{ fontSize: 15, color: 'white' }}>{year}</Text>
      </View>
    )
  };

  return (
    <TouchableOpacity
      style={styles.card}
      key={props.event.id}
      onPress={() => props.handleEventClick(props.event.id)}
    >
      <Image source={{ uri: props.event.images[8].url }} style={styles.coverImg}/>
      <View style={styles.coverOverlay}/>
      <View style={styles.artistInfo}>
        <View style={styles.venue}>
          <Text
            style={styles.text}
            numberOfLines={1}
          > {props.event.name} </Text>
          <Text style={styles.subtext}> {props.event._embedded.venues[0].name} </Text>
          <Text style={styles.subtext2}> {props.event._embedded.venues[0].city.name}</Text>
        </View>
        <View style={styles.date}>
          {buildDate()}
        </View>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  card: {
    borderColor: '#000',
    height: 150,
    borderRadius: 5,
    flex: 1,
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: '#1f1d1c',
    overflow: 'hidden',
    position: 'relative'
  },
  coverImg: {
    width: '100%',
    height: '100%',
    flex: 1,
    // flexDirection: 'row',
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,

  },
  coverOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.4)',
    top: 0,
    left: 0
  },
  artistInfo: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100%',
    // whiteSpace: 'nowrap',
    overflow: 'hidden',
    // textOverflow: 'ellipsis'
  },
  venue: {
    flexDirection: 'column',
    flex: 3,
    alignSelf: 'flex-end',
    paddingBottom: 10,
  },
  date: {
    flexDirection: 'column',
    flex: 1,
    // alignSelf: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  text: {
    // flexDirection: 'row',
    color: '#FFF',
    // fontWeight: '600',
    fontSize: 28,
    paddingLeft: 5,
  },
  subtext: {
    // flexDirection: 'row',
    color: '#ffb009',
    // fontWeight: '600',
    fontSize: 18,
    paddingLeft: 5
  },
  subtext2: {
    // flexDirection: 'row',
    color: '#a9a9ab',
    // fontWeight: '600',
    fontSize: 17,
    paddingLeft: 5
  }
});
