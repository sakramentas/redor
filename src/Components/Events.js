import React from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import { get } from 'lodash';
import { connect } from 'react-redux';
import { fetchEventsData, selectEvent, fetchFeesData } from '../actions/eventsActions';
import { EventsList } from './EventsList.js'

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    this.props.fetchEventsData();
  }

  handleEventClick(eventId) {
    this.props.selectEvent(eventId);
  }

  render() {
    const { events, isLoading } = this.props;
    return (
      <View style={styles.container}>
        {isLoading ?
          <ActivityIndicator
            animating={isLoading}
            style={[styles.centering, {height: 180, transform: [{scale: 1.5}]}]}
            size="large"
          />
          :
          <ScrollView>
            {events && Object.keys(events).map(event => {
              // fetchFeesData(events[event].id);
              return (
                <EventsList event={events[event]} key={events[event].id}
                            handleEventClick={this.handleEventClick.bind(this)}/>
              )
            })}
          </ScrollView>
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  events: get(state, 'events.list', {}),
  isLoading: get(state, 'events.loading', false),
});

export default connect(mapStateToProps, { fetchEventsData, selectEvent, fetchFeesData })(Events);

const styles = StyleSheet.create({
  title: {
    fontSize: 21,
    color: '#FFF',
    padding: 16
    // fontWeight: 600
  },
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: 26
  },
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
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});
