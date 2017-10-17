import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Events from './src/scenes/Events/index'
import EventPage from './src/Components/Events/EventPage/index'

const RouterComponent = () => {
  return (
    <Router
      getSceneStyle={() => ({ paddingTop: 25, backgroundColor: '#000', color: '#fff' })}
      navigationBarStyle={{ backgroundColor: 'black' }}
      titleStyle={{ color: '#FFF' }}
      barButtonIconStyle={{ tintColor: '#FFF' }}
      backButtonTextStyle={{ color: '#FFF' }}
    >
      <Scene key="root">
        <Scene key="events" component={Events} title="Events in Dublin"/>
        <Scene key="eventPage" component={EventPage} title="Event"/>
      </Scene>
    </Router>
  )
};

export default RouterComponent