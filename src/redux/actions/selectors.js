export const getEvents = state => get(state, 'events.list', []);

export const sortEvents = (events) => {
  return events
    .sort((a, b) => {
      let startTimeEventbrite = (obj) => obj.start ? obj.start.local : null;
      let startTimeTicketmaster = (obj) => obj.dates ? `${obj.dates.start.localDate}T${obj.dates.start.localTime}` : null;
      let getStartTime = (obj) => startTimeEventbrite(obj) || startTimeTicketmaster(obj);

      return new Date(getStartTime(a)).getTime() - new Date(getStartTime(b)).getTime();
    })
};
