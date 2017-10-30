// export const createHashedObject = (res1, res2) => {
//   const createHashedObject = [...res1, ...res2].reduce((all, item) => {
//     all[item.id] = item;
//     return all;
//   }, {});
//   console.log("newList", createHashedObject);
//
//   const newObject = {
//     name: '',
//     id: '',
//     type: '',
//     images: '',
//     description: '',
//     dateTime: '',
//     promoter: getPromoterInfo(),
//     venue: getVenueInfo(),
//   }
// };

// export default class createCommonObject {
//   constructor(data) {
//     this.res1 = res1;
//     this.res2 = res2;
//     this.newObject = {
//       name: '',
//       id: '',
//       type: '',
//       images: '',
//       description: '',
//       dateTime: '',
//       promoter: getPromoterInfo(data),
//       venue: getVenueInfo(data),
//     }
//   }
//
//   hashObject(data) {
//     return [data]
//       .reduce((all, item) => {
//         all[item.id] = item;
//         return all;
//       }, {});
//   }
//   getPromoterInfo(data) {
//
//   }
// }

import axios from 'axios';

export const fetchCategoryDataEventbrite = id => (dispatch) => {
  // axios.get('https://app.ticketmaster.com/discovery/v2/events.json?apikey=TLAdwV0eyURqxMPWSG8lnw9IvLH37GEZ&city=dublin&size=50&sort=date,name,asc')
  axios.get(`https://www.eventbriteapi.com/v3/categories/${id}/?token=SV7XRDVTKSTYYJOV4NU4`)
    .then(res => fetchVenueDataSuccess(dispatch, res.data))
    .catch(err => fetchVenueDataError(dispatch, err));
};


export const createCommonObjectTicketmaster = (data) => {
  const newObject = {
    name: '',
    id: '',
    type: '',
    images: '',
    description: '',
    dateTime: '',
    promoter: {},
    venue: {},
  };

  const hashObject = data => [data]
    .reduce((all, item) => {
      all[item.id] = item;
      return all;
    }, {});

  return hashObject(data)
    .map((event) => {
      newObject.name = event.name;
      newObject.id = event.id;
      newObject.type = event.id;
    });
};
