import { get } from 'lodash';
import moment from 'moment';

export const getEventTitle = event => get(event, `name.text`) || get(event, `name`, '');

export const getEventDescription = event => get(event, `description.text`) || get(event, `info`, '');

export const getEventPleaseNote = event => get(event, 'pleaseNote', '');

export const getEventImage = event => get(event, `images[2].url`) || get(event, `logo.url`, '');

export const getEventVenue = event => buildEventVenueData(event);

export const getEventDateTime = eventData => {
  let buildStartTimeEventbrite = event => get(event, 'start.local', null);
  let buildStartTimeTicketmaster = event => event.dates ?
    `${event.dates.start.localDate}T${event.dates.start.localTime}` : null;
  let getStartTime = (event) => buildStartTimeEventbrite(event) || buildStartTimeTicketmaster(event);

  return getStartTime(eventData);
};

export const getEventDate = dateTime => moment(dateTime).format("MMM Do YY, h:mm a");

export const buildEventVenueData = (venue) => ({
  name: get(venue, `name`, ''),
  address: get(venue, `address.localized_multi_line_address_display[0]`) || get(venue, `address.line1`, ''),
  city: get(venue, `address.city`) || get(venue, `city.name`, ''),
  country: get(venue, `address.country`) || get(venue, `country.name`, ''),
});