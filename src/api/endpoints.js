import moment from 'moment';

export const TICKETMASTER_ENDPOINT = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=TLAdwV0eyURqxMPWSG8lnw9IvLH37GEZ&city=dublin&size=50&sort=date,asc&startDateTime=${moment().format('YYYY-MM-DDTHH:mm:ss')}Z`;
export const EVENTBRITE_ENDPOINT = 'https://www.eventbriteapi.com/v3/events/search/?location.address=dublin&sort_by=date&token=SV7XRDVTKSTYYJOV4NU4';
