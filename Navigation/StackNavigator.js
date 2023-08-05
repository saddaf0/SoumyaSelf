import * as React from 'react';
import BackDoor from '../screens/backdoor';
import DenialOfService from '../screens/denialofservice';
import DirectAccessAttacks from '../screens/directaccessattacks';
import Phishing from '../screens/Phishing';
import SideChannelAttacks from '../screens/SideChannelAttacks';
import PrivelageEscalation from '../screens/PrivelageEscalation';
import SocialEngineering from '../screens/SocialEngineering';
import Spoofing from '../screens/Spoofing';
import Tampering from '../screens/Tampering';
import Malware from '../screens/Malware';
import DrawerNavigator from './drawerNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default class StackNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={DrawerNavigator} />
          <Stack.Screen name="BackDoor" component={BackDoor} />
          <Stack.Screen name="DenialOfService" component={DenialOfService} />
          <Stack.Screen
            name="DirectAccessAttacks"
            component={DirectAccessAttacks}
          />
          <Stack.Screen name="Phishing" component={Phishing} />
          <Stack.Screen
            name="SideChannelAttacks"
            component={SideChannelAttacks}
          />
          <Stack.Screen
            name="PrivelageEscalation"
            component={PrivelageEscalation}
          />
          <Stack.Screen
            name="SocialEngineering"
            component={SocialEngineering}
          />
          <Stack.Screen name="Spoofing" component={Spoofing} />
          <Stack.Screen name="Tampering" component={Tampering} />
          <Stack.Screen name="Malware" component={Malware} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
