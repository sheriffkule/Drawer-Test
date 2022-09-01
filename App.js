import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';
import GoalsScreen from './screens/GoalsScreen';

function LogoTitle() {
  return (
    <Image
      style={{width: 50, height: 50}}
      source={require('./assets/images/react.png')}
    />
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: '#a7dadc',
          headerTitleAlign: 'center',
          drawerActiveBackgroundColor: '#1d3658',
          drawerActiveTintColor: '#0eaf69',
          drawerInactiveTintColor: '#0eaf69',
          drawerStyle: {backgroundColor: '#011628'},
          drawerType: 'slide',
          drawerStatusBarAnimation: 'fade', //only on IOS
          headerTitle: props => <LogoTitle {...props} />,
        }}>
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            drawerLabel: 'Welcome Screen',
            drawerIcon: ({color, size}) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{
            drawerIcon: ({color, size}) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Goals"
          component={GoalsScreen}
          options={{
            drawerIcon: ({color, size}) => (
              <Ionicons name="list" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
