import React, { Component } from 'react';
import { Text, View, Image, Linking, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { styles } from './styles';
import { getCategoryData } from '../../../redux/Events/selectors';
import { fetchCategoryData } from '../../../redux/Events/actions';

class EventCategory extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { eventData, fetchCategoryData } = this.props;

    // !get(eventData, '_embedded.venues[0]', false) ? fetchVenueData(eventData.venue_id, eventData.id) : null;
    get(eventData, 'category_id', false) && fetchCategoryData(eventData.id, eventData.category_id);
  }


  render() {
    const {
      venueLocation,
      venueName,
    } = styles;
    const { categoryData, eventData } = this.props;

    return (
      <View style={venueLocation}>
        {!categoryData ?
          <Text>Loading venue address...</Text>
          :
          <View>
            <Text style={venueName}> {categoryData.name}</Text>
          </View>
        }
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  categoryData: getCategoryData(state),
  // get(state, 'events.selected.categoryInfo') || get(ownProps, 'eventData.classifications[0]', null),
  // isLoading: get(state, 'events.selected.loading', false),
  // getCategoryName: getCategoryName(state)
});

const mapDispatchToProps = { fetchCategoryData };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventCategory);
