import { get } from 'lodash';
import moment from 'moment';
import {
  buildGmapsStaticImageUrl,
  buildGmapsAnchorUrl
} from '../api/endpoints';

export const getEventTitle = event => get(event, 'name.text') || get(event, 'name', '');

export const getEventDescription = event => get(event, 'description.text') || get(event, 'info', '');

export const getEventPleaseNote = event => get(event, 'pleaseNote', '');

export const getEventImage = event => get(event, 'images[2].url') || get(event, 'logo.url', '');

export const getEventVenue = state => {
  let venueInfo = get(state, 'events.selected.venueInfo') || get(state, 'events.selected._embedded.venues[0]');
  return venueInfo && buildEventVenueData(venueInfo);
};

export const getEventDateTime = (eventData) => {
  const buildStartTimeEventbrite = event => get(event, 'start.local', null);
  const buildStartTimeTicketmaster = event => (event.dates ?
    `${event.dates.start.localDate}T${event.dates.start.localTime}` : null);
  const getStartTime = event => buildStartTimeEventbrite(event) || buildStartTimeTicketmaster(event);

  return getStartTime(eventData);
};

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