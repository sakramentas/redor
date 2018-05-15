import { get } from 'lodash';

export default class EventModel {
  constructor(event) {
    const model = {
      id: event.id,
      name: this.getEventName(event),
      dateTime: this.getEventDateTime(event),
      description: this.getEventDescription(event),
      url: event.url,
      organizer: this.getEventOrganizer(event),
      image: this.getEventImage(event),
      provider: this.getEventProvider(event),
    };

    return model;
  }

  getEventName(event) {
    return get(event, 'name.text') || get(event, 'name');
  }

  getEventDateTime(event) {
    if (get(event, 'dates.start')) {
      return `${get(event, 'dates.start.localDate')}T${get(event, 'dates.start.localTime')}`;
    } else if (get(event, 'start')) {
      return event.start.local;
    }
    return '';
  }

  getEventDescription(event) {
    return get(event, 'pleaseNote') || get(event, 'description.text') || '';
  }

  getEventOrganizer(event) {
    return get(event, 'promoter.name') || get(event, 'organizer_id') || '';
  }

  getEventImage(event) {
    return get(event, 'images[0].url') || get(event, 'logo.url') || '';
  }

  getEventProvider(event) {
    if (get(event, 'images')) {
      return 'ticketmaster';
    } else if (get(event, 'logo')) {
      return 'eventbrite';
    }
  }
}
