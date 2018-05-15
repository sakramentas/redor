import React from 'react';
import { View, ScrollView } from 'react-native';
import { get } from 'lodash';
import { connect } from 'react-redux';

import {
  fetchEventsData,
  fetchEventsBestData,
  fetchCategoriesIdData,
} from '../../core/redux/Events/actions';
import { getAllEvents } from '../../core/redux/Events/selectors';
import EventCarousel from '../../components/EventCarousel';
import EventList from '../../components/EventList';
import Loading from '../../components/Loading';
import { styles } from './styles';

class Events extends React.Component {
  componentWillMount() {
    this.props.fetchEventsData();
    this.props.fetchEventsBestData();
    this.props.fetchCategoriesIdData();
  }

  render() {
    const {
      events,
      eventsBest,
      isLoading
    } = this.props;
    const { eventsScene } = styles;

    return (
      <View style={eventsScene}>
        {isLoading ?
          <Loading />
          :
          <View>
            {Object.keys(events).length > 0 && eventsBest.length > 0 &&
            <ScrollView>
              <EventCarousel data={eventsBest} />
              <EventList data={events} />
            </ScrollView>
            }
          </View>
        }
      </View>
    );
  }
};

const mapStateToProps = state => ({
  events: get(state, 'events.normalizedList', {}),
  eventsBest: get(state, 'events.listBest', []),
  isLoading: get(state, 'events.loading', true),
});

const mapDispatchToProps = {
  fetchEventsData,
  fetchEventsBestData,
  fetchCategoriesIdData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Events);
