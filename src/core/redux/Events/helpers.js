export const sortEvents = events =>
  events.sort((a, b) => {
    const startTimeEventbrite = obj => (obj.start ? obj.start.local : null);
    const startTimeTicketmaster = obj => (obj.dates ? `${obj.dates.start.localDate}T${obj.dates.start.localTime}` : null);
    const getStartTime = obj => startTimeEventbrite(obj) || startTimeTicketmaster(obj);

    return new Date(getStartTime(a)).getTime() - new Date(getStartTime(b)).getTime();
  });
