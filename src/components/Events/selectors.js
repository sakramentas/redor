import { get } from 'lodash';
import moment from 'moment';
import {
  buildGmapsStaticImageUrl,
  buildGmapsAnchorUrl
} from '../../api/endpoints';

export const getEventTitle = (state, ownProps) => {
  const id = get(ownProps, `event.id`);

  return id && get(state, `events.hashList.${id}.name.text`) || get(state, `events.hashList.${id}.name`, '');
};

export const getEventDescription = event => get(event, 'description.text') || get(event, 'info', '');

export const getEventPleaseNote = event => get(event, 'pleaseNote', '');

export const getEventImageSelectedEvent = (state) =>
get(state, `events.selected.images[2].url`) || get(state, `events.selected.logo.url`, '');

export const getEventImage = (state, ownProps) => {
  const id = get(ownProps, `event.id`);

  return id && get(state, `events.hashList.${id}.images[2].url`) || get(state, `events.hashList.${id}.logo.url`, '');
};

export const getEventVenue = state => {
  let venueInfo = get(state, 'events.selected.venueInfo') || get(state, 'events.selected._embedded.venues[0]');
  return venueInfo && buildEventVenueData(venueInfo);
};

export const getEventDateTime = (state, ownProps) => {
  const id = get(ownProps, `event.id`);

  if (id) {
    const buildStartTimeEventbrite = state => get(state, `events.hashList.${id}.start.local`, null);
    const buildStartTimeTicketmaster = (state) => {
      const localDate = get(state, `events.hashList.${id}.dates.start.localDate`, '');
      const localTime = get(state, `events.hashList.${id}.dates.start.localTime`, '00:00:00');

      return get(state, `events.hashList.${id}.dates`, null) ?
        `${localDate}T${localTime}` : null;
    };

    return buildStartTimeEventbrite(state) || buildStartTimeTicketmaster(state);
  }
};

export const getEventTime = (ownProps) => moment(ownProps.eventDateTime).format('LT');

export const getEventDate = dateTime => moment(dateTime).format('MMM Do YY, h:mm a');

export const getEventDateLong = dateTime => moment(dateTime).format('dddd, h:mm a');

export const buildEventVenueData = venue => ({
  name: get(venue, 'name', ''),
  address: get(venue, 'address.localized_multi_line_address_display[0]') || get(venue, 'address.line1', ''),
  city: get(venue, 'address.city') || get(venue, 'city.name', ''),
  country: get(venue, 'address.country') || get(venue, 'country.name', ''),
  latitude: (get(venue, 'address.latitude') || get(venue, 'location.latitude', '53.445373')).substring(0, 9),
  longitude: (get(venue, 'address.longitude') || get(venue, 'location.longitude', '-6.223878')).substring(0, 9),
});

export const getGmapsStaticImageUrl = (state) => {
  let lat = get(getEventVenue(state), 'latitude', null);
  let lon = get(getEventVenue(state), 'longitude', null);

  return lat && lon && buildGmapsStaticImageUrl(lat, lon);
};

export const getGmapsAnchorUrl = (state) => {
  let lat = get(getEventVenue(state), 'latitude', null);
  let lon = get(getEventVenue(state), 'longitude', null);

  return lat && lon && buildGmapsAnchorUrl(lat, lon);
};

export const getCategoryData = (state) => {
  return {
    name: get(state, 'events.selected.categoryInfo.name') || get(state, 'events.selected.classifications[0].segment.name', ''),
    additionalData: get(state, 'events.selected.categoryInfo.subcategories') || get(state, 'events.selected.classifications', []),
  }
};