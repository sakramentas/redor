const firebase = require('firebase');
const axios = require('axios');

const config = {
  apiKey: 'AIzaSyBynJIT2v0VV3QeuWYdd7pvCbAbVdW82hs',
  authDomain: 'dublin-events-1509214523643.firebaseapp.com',
  databaseURL: 'https://dublin-events-1509214523643.firebaseio.com',
  projectId: 'dublin-events-1509214523643',
  storageBucket: 'dublin-events-1509214523643.appspot.com',
  messagingSenderId: '893744536833',
};
firebase.initializeApp(config);

// axios.get('https://www.eventbriteapi.com/v3/categories/?token=SV7XRDVTKSTYYJOV4NU4')
//   .then(response => {
//     response.data.categories.forEach(el => firebase.database().ref('categoriesId').child(el['id']).update(el));
//   })