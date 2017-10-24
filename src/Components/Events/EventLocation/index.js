import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { styles } from './styles';
import { getEventVenue } from '../../../selectors/event-selectors';
import { fetchVenueData } from '../../../redux/actions/eventsActions';

class EventLocation extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { eventData, fetchVenueData } = this.props;

    !get(eventData, `_embedded.venues[0]`, false) ? fetchVenueData(eventData.venue_id, eventData.id) : null;
  }

  render() {
    const {
      venueLocation,
      venueName,
      venueAddress,
      venueCity
    } = styles;
    const { venueInfo, isLoading } = this.props;

    return (
      <View style={venueLocation}>
        {isLoading ?
          <Text>Loading venue address...</Text>
          :
          <View>
            {venueInfo &&
            <View>
              <Text style={venueName}> {getEventVenue(venueInfo).name}</Text>
              <Text style={venueAddress}> {getEventVenue(venueInfo).address}</Text>
              <Text
                style={venueCity}> {getEventVenue(venueInfo).city}, {getEventVenue(venueInfo).country}</Text>
            </View>
            }
          </View>
        }
      </View>
    )
  };
}

const mapStateToProps = (state, ownProps) => ({
  venueInfo: get(state, `events.selected.venueInfo`) || get(ownProps, `eventData._embedded.venues[0]`),
  isLoading: get(state, 'events.selected.loading', false),
});

const mapDispatchToProps = { fetchVenueData };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventLocation);
