import { has, isArray } from 'lodash';
import moment from 'moment';
import { fetchVenueData } from "../redux/actions/eventsActions";
export const getEventTitle = event => event.name.text ? event.name.text : event.name;
export const getEventDescription = event => event.description ? event.description.text : event.info ? event.info : '';
export const getEventPleaseNote = event => event.pleaseNote ? event.pleaseNote : '';
export const getEventImage = event => isArray(event.images) ? event.images[2].url : event.logo ? event.logo.url : '';
export const getEventVenue = event => has(event._embedded) ? event._embedded.venues[0] : event.venueData ? buildEventVenueData(event.venueData) : null;
export const getEventDateTime = eventData => {
  let buildStartTimeEventbrite = event => event.start ? event.start.local : null;
  let buildStartTimeTicketmaster = event => event.dates ?
    `${event.dates.start.localDate}T${event.dates.start.localTime}` : null;
  let getStartTime = (event) => buildStartTimeEventbrite(event) || buildStartTimeTicketmaster(event);

  return getStartTime(eventData);
};
export const getEventDate = dateTime => moment(dateTime).format("MMM Do YY, h:mm a");

export const buildEventVenueData = (venue) => ({
  name: venue.name,
  address: venue.address.localized_multi_line_address_display[0] || '',
  city: venue.address.city,
  country: venue.address.country
});