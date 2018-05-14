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
} from '../../redux/Events/actions';
import EventCard from '../../components/Events/EventCard';
import EventCardLarge from '../../components/Events/EventCardLarge';
import { styles } from './styles';

class Events extends React.Component {
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
          <View>
            {events.length > 0 && eventsBest.length > 0 &&
            <ScrollView>
              <Carousel
                height={300}
                delay={4000}
                indicatorAtBottom
                indicatorSize={20}
                indicatorColor="#FFF"
              >
                {eventsBest.map(event => (
                  <View style={{ marginBottom: 30, height: 300 }}>
                    <EventCardLarge
                      event={event}
                      key={event.id}
                    />
                  </View>
                ))}
              </Carousel>
              <View style={{ marginTop: 20, padding: 10 }}>
                <Text style={{ color: 'white', marginBottom: 5, fontSize: 18 }}>Next Events</Text>
                {events.map(event => (
                  <EventCard
                    event={event}
                    key={events.id}
                  />
                ))}
              </View>
            </ScrollView>
            }
          </View>
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  events: get(state, 'events.list', []),
  eventsBest: get(state, 'events.listBest', []),
  isLoading: get(state, 'events.loading', true),
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
