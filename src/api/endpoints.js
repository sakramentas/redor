import { getDateNowFull } from '../helpers';

export const TICKETMASTER_API_KEY = 'TLAdwV0eyURqxMPWSG8lnw9IvLH37GEZ';
export const EVENTBRITE_API_KEY = 'SV7XRDVTKSTYYJOV4NU4';
export const GMAPS_STATIC_API_KEY = 'AIzaSyAotqkbCfXbmlfRYx43Ph_yq9rhN4Qo2Jw';

const TICKETMASTER_URL = 'https://app.ticketmaster.com/discovery/v2';
const EVENTBRITE_URL = 'https://www.eventbriteapi.com/v3';
const GMAPS_ANCHOR_URL = 'https://www.google.com/maps/search/';
const GMAPS_STATIC_URL = 'https://maps.googleapis.com/maps/api/staticmap';

const DEFAULT_CITY = 'dublin';

export const buildGmapsStaticImageUrl = (lat, lon) => {
  const params = `center=${lat},${lon}&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7Clabel:C%7C${lat},${lon}&key=${GMAPS_STATIC_API_KEY}`;

  return `${GMAPS_STATIC_URL}?${params}`;
};

export const buildGmapsAnchorUrl = (lat, lon) => {
  const params = `api=1&query=${lat},${lon}`;

  return `${GMAPS_ANCHOR_URL}?${params}`;
};

// --- Endpoint builders for Ticketmaster ---
export const buildFetchEventsTicketmasterEndpoint = (size = '50', sort = 'date,asc') => ({
  url: `${TICKETMASTER_URL}/events.json`,
  timeout: 60000,
  method: 'get',
  params: {
    apikey: TICKETMASTER_API_KEY,
    city: DEFAULT_CITY,
    startDateTime: getDateNowFull(),
    size,
    sort,
  },
});

// --- Endpoint builders for Eventbrite ---
// The Eventbrite API has some weird params that can't be placed in the axios params object,
// so we need to build a url instead.
export const buildFetchEventsEventbriteEndpoint = (sort = 'date', category = 'events') => {
  const params = `location.address=${DEFAULT_CITY}&sort_by=${sort}&token=${EVENTBRITE_API_KEY}`;

  return `${EVENTBRITE_URL}/${category}/search?${params}`;
};

export const buildFetchCommonEventbriteEndpoint = (id, category) => {
  const params = `&token=${EVENTBRITE_API_KEY}`;

  return `${EVENTBRITE_URL}/${category}/${id}?${params}`;
};
