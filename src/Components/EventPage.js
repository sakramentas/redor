import React from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { StyleSheet, Text, View, Image } from 'react-native';

export const EventPage = (props) => {
  return (
    <View style={styles.card} key={props.event.id}>
      <Image source={{ uri: props.event.images[2].url }} style={styles.coverImg} />
      <View style={styles.artistInfo}>
        <Text style={styles.text}> {props.event.name} </Text>
        <Text style={styles.subtext}> {props.event._embedded.venues[0].name} </Text>
        <Text style={styles.subtext}> {props.event._embedded.venues[0].city.name}</Text>
        <Text style={styles.subtext}> {props.event.dates.start.localDate}</Text>
      </View>
    </View>
  )
};

const mapStateToProps = state => ({
  event: get(state, 'events.selected', {}),
});

export default connect(mapStateToProps, {})(EventPage);


const styles = StyleSheet.create({
  card: {
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5,
    flex: 1,
    marginBottom: 10,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#1f1d1c',
    padding: 8
  },
  coverImg: {
    width: 300,
    height: 300,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  artistInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 28,
    paddingLeft: 5,
    flex: 1,
    // flexDirection: 'row'
  },
  subtext: {
    color: 'white',
    // fontWeight: '600',
    fontSize: 15,
    paddingLeft: 5,
    flex: 1,
    flexDirection: 'row'
  }
});
