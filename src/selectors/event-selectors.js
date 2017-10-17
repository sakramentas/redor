import { get, isArray } from 'lodash';
import moment from 'moment';

export const getEventTitle = event => event.name.text ? event.name.text : event.name;
export const getEventDescription = event => event.description ? event.description.text : event.info ? event.info : '';
export const getEventPleaseNote = event => event.pleaseNote ? event.pleaseNote : '';
export const getEventImage = event => isArray(event.images) ? event.images[2].url : event.logo ? event.logo.url : '';
export const getEventVenue = event => get(event, '_embedded.venues[0]', null);
export const getEventDateTime = eventData => {
  let buildStartTimeEventbrite = event => event.start ? event.start.local : null;
  let buildStartTimeTicketmaster = event => event.dates ?
    `${event.dates.start.localDate}T${event.dates.start.localTime}` : null;
  let getStartTime = (event) => buildStartTimeEventbrite(event) || buildStartTimeTicketmaster(event);

  return getStartTime(eventData);
};
export const getEventDate = dateTime => moment(dateTime).format("MMM Do YY, h:mm a");