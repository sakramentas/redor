import React from 'react';
import { Text, View, ScrollView, ActivityIndicator } from 'react-native';
import { get } from 'lodash';
import { connect } from 'react-redux';
import Carousel from 'react-native-carousel-view';
import {
  fetchEventsData,
  fetchEventsBestData,
  selectEvent,
  fetchFeesData
} from '../../redux/actions/eventsActions';
import { EventCard } from '../../components/Events/EventCard';
import { EventCardLarge } from '../../components/Events/EventCardLarge';
import { styles } from './styles';

class Events extends React.Component {
  constructor(props) {
    super(props);

    this.handleEventClick = this.handleEventClick.bind(this);
  }

  componentWillMount() {
    this.props.fetchEventsData();
    this.props.fetchEventsBestData();
  }

  handleEventClick(eventId) {
    this.props.selectEvent(eventId);
  }

  render() {
    const { events, eventsBest, isLoading } = this.props;
    const {
      eventsScene,
      loadingIndicator,
      loadingText
    } = styles;
    const defaultProps = {
      hideIndicators: false,
      indicatorColor: '#000000',
      indicatorSize: 20,
      inactiveIndicatorColor: '#999999',
      indicatorAtBottom: true,
      indicatorOffset: 0,
      indicatorText: '•',
      inactiveIndicatorText: '•',
      width: null,
      height: 200,
      initialPage: 0,
      indicatorSpace: 10,
      animate: true,
      delay: 1000,
      loop: true,
    };

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
            <Carousel
              height={300}
              delay={4000}
              indicatorAtBottom={true}
              indicatorSize={20}s
              indicatorColor="#FFF"
            >
              {events && Object.keys(eventsBest).map(event => {
                return (
                  <View style={{ marginBottom: 30 }}>
                    <EventCardLarge
                      event={eventsBest[event]}
                      key={eventsBest[event].id}
                      handleEventClick={this.handleEventClick}
                    />
                  </View>
                )
              })}
            </Carousel>
            <View style={{ marginTop: 20 }}>
              <Text style={{ color: 'white', marginBottom: 5, fontSize: 18 }}>Next Events</Text>
              {events && Object.keys(events).map(event => {
                return (
                  <EventCard
                    event={events[event]}
                    key={events[event].id}
                    handleEventClick={this.handleEventClick}
                  />
                )
              })}
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
  selectEvent,
  fetchFeesData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);
