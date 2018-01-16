import React from 'react'
import { View, Text } from 'react-native'
import { Icon, Header } from 'react-native-elements'
import {
  Router,
  Scene,
  Drawer,
  Reducer,
} from 'react-native-router-flux'

import DrawerContent from './components/drawer'


const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log('ACTION:', action);
    return defaultReducer(state, action);
  };
};

const getSceneStyle = () => ({
  backgroundColor: '#F5FCFF',
  shadowOpacity: 1,
  shadowRadius: 3,
});

const styles = {
  navBar: {
    backgroundColor:'#3949ab',
  },
  navBarTitle:{
    color:'#FFFFFF',
    fontSize: 16,
    fontWeight: '100',
  },
  barButtonTextStyle:{
    color:'#FFFFFF'
  },
  barButtonIconStyle:{
    tintColor:'rgb(255,255,255)'
  },
}

const Scene1 = () => (
  <View>
    <Text>
      Hi!
    </Text>
  </View>
)

export const Routes = () => (
  <Router
    createReducer={reducerCreate}
    getSceneStyle={getSceneStyle}
    navigationBarStyle={styles.navBar}
    titleStyle={styles.navBarTitle}
    barButtonTextStyle={styles.barButtonTextStyle}
    barButtonIconStyle={styles.barButtonIconStyle}
  >
    <Drawer
      key="drawer"
      contentComponent={DrawerContent}
      drawerWidth={250}
      drawerIcon={
        <Icon
          name='menu'
          color='#FFFFFF'
        />
      }
    >
      <Scene
        key="scene1"
        title="Scene 1"
        // navbar={
        //   <Header
        //     leftComponent={{ icon: 'menu', color: '#fff' }}
        //     centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        //     rightComponent={{ icon: 'home', color: '#fff' }}
        //   />
        // }
        component={Scene1}
      />
    </Drawer>
  </Router>
)

    export default Routes
