import moment from 'moment';

export const TICKETMASTER_API_KEY = 'TLAdwV0eyURqxMPWSG8lnw9IvLH37GEZ';
export const EVENTBRITE_API_KEY = 'SV7XRDVTKSTYYJOV4NU4';

export const TICKETMASTER_ENDPOINT = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${TICKETMASTER_API_KEY}&city=dublin&size=50&sort=date,asc&startDateTime=${moment().format('YYYY-MM-DDTHH:mm:ss')}Z`;
export const EVENTBRITE_ENDPOINT = `https://www.eventbriteapi.com/v3/events/search/?location.address=dublin&sort_by=date&token=${EVENTBRITE_API_KEY}`;

export const buildEventbriteVenueEndpoint = id => `https://www.eventbriteapi.com/v3/venues/${id}/?token=${EVENTBRITE_ENDPOINT}`;
