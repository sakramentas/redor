import moment from 'moment';

export const TICKETMASTER_API_KEY = 'TLAdwV0eyURqxMPWSG8lnw9IvLH37GEZ';
export const EVENTBRITE_API_KEY = 'SV7XRDVTKSTYYJOV4NU4';
export const GMAPS_STATIC_API_KEY = 'AIzaSyAotqkbCfXbmlfRYx43Ph_yq9rhN4Qo2Jw';

export const TICKETMASTER_ENDPOINT = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${TICKETMASTER_API_KEY}&city=dublin&size=50&sort=date,asc&startDateTime=${moment().format('YYYY-MM-DDTHH:mm:ss')}Z`;
export const TICKETMASTER_BEST_ENDPOINT = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${TICKETMASTER_API_KEY}&city=dublin&size=10&sort=relevance,desc&startDateTime=${moment().format('YYYY-MM-DDTHH:mm:ss')}Z`;

export const EVENTBRITE_ENDPOINT = `https://www.eventbriteapi.com/v3/events/search/?location.address=dublin&sort_by=date&token=${EVENTBRITE_API_KEY}`;
export const EVENTBRITE_BEST_ENDPOINT = `https://www.eventbriteapi.com/v3/events/search/?location.address=dublin&sort_by=best&token=${EVENTBRITE_API_KEY}`;

export const buildEventbriteVenueEndpoint = id => `https://www.eventbriteapi.com/v3/venues/${id}/?token=${EVENTBRITE_ENDPOINT}`;

export const buildGmapsStaticImageUrl = (lat, lon) => {
  return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7Clabel:C%7C${lat},${lon}&key=${GMAPS_STATIC_API_KEY}`
};