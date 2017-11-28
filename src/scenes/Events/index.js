import React from 'react';
import { Text, View, ScrollView, ActivityIndicator } from 'react-native';
import { get } from 'lodash';
import { connect } from 'react-redux';
import Carousel from 'react-native-carousel-view';
import {
  fetchEventsData,
  fetchEventsBestData,
  fetchFeesData,
  fetchCategoriesIdData,
} from '../../components/Events/actions';
import EventCard from '../../components/Events/EventCard';
import EventCardLarge from '../../components/Events/EventCardLarge';
import { styles } from './styles';

class Events extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchEventsData();
    this.props.fetchEventsBestData();
    this.props.fetchCategoriesIdData();
  }

  render() {
    const { events, eventsBest, isLoading } = this.props;
    const {
      eventsScene,
      loadingIndicator,
      loadingText,
    } = styles;

    return (
      <View style={eventsScene}>
        {isLoading ?
          <View>
            <ActivityIndicator
              // animating={isLoading}
              style={loadingIndicator}
              size="large"
            />
            <Text style={loadingText}>Bringing the best events in Dublin to you...</Text>
          </View>
          :
          <ScrollView>
            <Carousel
              height={300}
              delay={4000}
              indicatorAtBottom
              indicatorSize={20}
              indicatorColor="#FFF"
            >
              {events && Object.keys(eventsBest).map(event => (
                <View style={{ marginBottom: 30 }}>
                  <EventCardLarge
                    event={eventsBest[event]}
                    key={eventsBest[event].id}
                  />
                </View>
                ))}
            </Carousel>
            <View style={{ marginTop: 20 }}>
              <Text style={{ color: 'white', marginBottom: 5, fontSize: 18 }}>Next Events</Text>
              {events && Object.keys(events).map(event => (
                <EventCard
                  event={events[event]}
                  key={events[event].id}
                />
                ))}
            </View>
          </ScrollView>
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  events: get(state, 'events.list', {}),
  eventsBest: get(state, 'events.listBest', {}),
  isLoading: get(state, 'events.loading', false),
});

const mapDispatchToProps = {
  fetchEventsData,
  fetchEventsBestData,
  fetchFeesData,
  fetchCategoriesIdData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Events);
