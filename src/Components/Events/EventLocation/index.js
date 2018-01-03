import React, { Component } from 'react';
import { Text, View, Image, Linking, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { styles } from './styles';
import { getEventVenue, getGmapsStaticImageUrl, getGmapsAnchorUrl } from '../selectors';
import { fetchVenueData } from '../actions';

class EventLocation extends Component {
  constructor(props) {
    super(props);

    this.handleOpenMap = this.handleOpenMap.bind(this);
  }

  componentWillMount() {
    const { eventData, fetchVenueData } = this.props;

    !get(eventData, '_embedded.venues[0]', false) ? fetchVenueData(eventData.venue_id, eventData.id) : null;
  }

  handleOpenMap() {
    const { gMapsAnchorUrl } = this.props;

    Linking
      .openURL(gMapsAnchorUrl)
      .catch(err => console.error('An error occurred', err));
  }

  render() {
    const {
      venueLocation,
      venueName,
      venueAddress,
      venueCity,
      mapThumbnail,
      mapThumbnailContainer,
    } = styles;
    const { venueInfo, isLoading, gMapsStaticImageUrl } = this.props;

    return (
      <View style={venueLocation}>
        {isLoading ?
          <Text>Loading venue address...</Text>
          :
          <View>
            {venueInfo &&
            <View>
              <Text style={venueName}> {venueInfo.name}</Text>
              <Text style={venueAddress}> {venueInfo.address}</Text>
              <Text style={venueCity}> {venueInfo.city}, {venueInfo.country}</Text>
              <TouchableOpacity onPress={this.handleOpenMap} style={mapThumbnailContainer}>
                <Image
                  source={{ uri: gMapsStaticImageUrl }}
                  style={mapThumbnail}
                />
              </TouchableOpacity>
            </View>
            }
          </View>
        }
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  venueInfo: getEventVenue(state),
  gMapsStaticImageUrl: getGmapsStaticImageUrl(state),
  gMapsAnchorUrl: getGmapsAnchorUrl(state),
  isLoading: get(state, 'events.selected.loading', false),
});

const mapDispatchToProps = { fetchVenueData };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventLocation);
