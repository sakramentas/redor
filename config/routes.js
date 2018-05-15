import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Events from '../src/scenes/Events/index';
import EventPage from '../src/components/EventPage/index';

const RouterComponent = () => (
  <Router
    getSceneStyle={() => ({ backgroundColor: '#0e0e0e', color: '#fff' })}
    navigationBarStyle={{ backgroundColor: '#0e0e0e', color: '#fff', paddingTop: 35, height: 80 }}
    titleStyle={{ color: '#FFF' }}
    barButtonIconStyle={{ tintColor: '#FFF' }}
    backButtonTextStyle={{ color: '#FFF' }}
  >
    <Scene key="root">
      <Scene key="events" component={Events} title="LIVE: Dublin!" />
      <Scene key="eventPage" component={EventPage} title="Event" />
    </Scene>
  </Router>
);

export default RouterComponent;
