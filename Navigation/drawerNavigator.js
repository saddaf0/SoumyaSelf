import React, { Component } from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/home';
import ApplicationScreen from '../screens/application';
import CloudScreen from '../screens/cloud';
import IotScreen from '../screens/iot';
import NetworkScreen from '../screens/network';
import StackNavigator from './StackNavigator';

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component {
  render() {
    return (
      <Drawer.Navigator> 
      <Drawer.Screen name="Network Screen" component={NetworkScreen} />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen
          name="Application Screen"
          component={ApplicationScreen}
        />
        <Drawer.Screen name="Cloud Screen" component={CloudScreen} />
        <Drawer.Screen name="Internet Of Things Screen" component={IotScreen} />
       
      </Drawer.Navigator>
    );
  }
}
