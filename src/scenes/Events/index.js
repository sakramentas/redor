import React from 'react';
import { Text, View, ScrollView, ActivityIndicator } from 'react-native';
import { get } from 'lodash';
import { connect } from 'react-redux';
import { fetchEventsData, selectEvent, fetchFeesData } from '../../redux/actions/eventsActions';
import { EventCard } from '../../components/Events/EventCard'
import { styles } from './styles';

class Events extends React.Component {
  constructor(props) {
    super(props);

    this.handleEventClick = this.handleEventClick.bind(this);
  }

  componentWillMount() {
    this.props.fetchEventsData();
  }

  handleEventClick(eventId) {
    this.props.selectEvent(eventId);
  }

  render() {
    const { events, isLoading } = this.props;
    const {
      eventsScene,
      loadingIndicator,
      loadingText
    } = styles;

    return (
      <View style={eventsScene}>
        {isLoading ?
          <View>
            <ActivityIndicator
              animating={isLoading}
              style={loadingIndicator}
              size="large"
            />
            <Text style={loadingText}>Bringing the best events in Dublin to you...</Text>
          </View>
          :
          <ScrollView>
            {events && Object.keys(events).map(event => {
              return (
                <EventCard
                  event={events[event]}
                  key={events[event].id}
                  handleEventClick={this.handleEventClick}
                />
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

const mapDispatchToProps = {
  fetchEventsData,
  selectEvent,
  fetchFeesData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);
