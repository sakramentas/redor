export const dataModelTicketmaster = (data) => {
  const newObject = {
    name: '',
    id: '',
    type: '',
    images: {},
    description: '',
    dateTime: '',
    promoter: {},
    venue: {},
    url: '',
    categories: {},
  };

  data.map(event => ({
    name: event.name,
    id: event.id,
    type: event.type,
    image: event.images[0].url,
    descriptions: [event.description && event.description.text, event.pleaseNote && event.pleaseNote],
    dateTime: '',
    promoter: {},
    venue: {},
    url: '',
    categories: {},
    embedded: event._embedded,
    links: event._links,
  }));

  // const hashObject = (data) => {
  //   return [data]
  //     .reduce((all, item) => {
  //       all[item.id] = item;
  //       return all;
  //     }, {});
  // };

  // return hashObject(data)
  //   .map(event => {
  //     newObject.name = event.name;
  //     newObject.id = event.id;
  //     newObject.type = event.id;
  //   })
};
