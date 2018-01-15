import React from 'react'

import {
  Router,
  Scene,
  Drawer,
} from 'react-native-router-flux'

import DrawerContent from './components/drawer'

const Scene1 = () => (
  <View>
    <Text>
      Hi!
    </Text>
  </View>
)

export const Routes = () => (
  <Drawer
    hideNavBar
    key="drawer"
    contentComponent={DrawerContent}
    drawerWidth={300}
  >
    <Scene
      key="scene1"
      title="Scene 1"
      component={Scene1}
    />
  </Drawer>
    )

    export default Routes
