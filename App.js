import React from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';
import GoalsScreen from './screens/GoalsScreen';
import LogoTitle from './components/UI/LogoTitle';
import HomeScreen from './screens/HomeScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import ResourcesScreen from './screens/ResourcesScreen';

const Stack = createNativeStackNavigator();

const BottomTabs = createBottomTabNavigator();

const Drawer = createDrawerNavigator();


function HomeScreenNavigator() {
  return (
    <BottomTabs.Navigator
      initialRouteName='Home'
      screenOptions={{
      headerTitleAlign: 'center'
    }}>
      <BottomTabs.Screen name="Home" component={WelcomeScreen} options={{
        headerShown: false,
      }} />
      <BottomTabs.Screen name="Projects" component={ProjectsScreen} />
      <BottomTabs.Screen name="Resources" component={ResourcesScreen} />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
    <StatusBar barStyle={'light-content'} />
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: '#a7dadc',
          headerTitleAlign: 'center',
          drawerActiveBackgroundColor: '#1d3658',
          drawerActiveTintColor: '#0eaf69',
          drawerInactiveTintColor: '#0eaf69',
          drawerStyle: { backgroundColor: '#011628' },
          drawerType: 'slide',
          drawerStatusBarAnimation: 'fade', //only on IOS
          headerTitle: props => <LogoTitle {...props} />,
        }}>
        <Drawer.Screen
          name="Welcome"
          component={HomeScreenNavigator}
            options={{
            drawerLabel: 'Home',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Goals"
          component={GoalsScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="list" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}