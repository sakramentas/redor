import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Events from './src/Components/Events'
import EventPage from './src/Components/EventPage'

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 25, backgroundColor: 'black', color: '#fff' }}>
      <Scene key="root">
        <Scene key="events" component={Events} title="Events list in Dublin"/>
        <Scene key="eventPage" component={EventPage} title="Event"/>
      </Scene>
    </Router>
  )
};

export default RouterComponent