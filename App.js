import React from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';
import GoalsScreen from './screens/GoalsScreen';
import LogoTitle from './components/UI/LogoTitle';
import ProjectsScreen from './screens/ProjectsScreen';
import ResourcesScreen from './screens/ResourcesScreen';

const BottomTabs = createBottomTabNavigator();

const Drawer = createDrawerNavigator();


function HomeScreenNavigator() {
  return (
    <BottomTabs.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarStyle: { backgroundColor: '#01bbef' },
        tabBarActiveBackgroundColor: '#05688f',
        tabBarActiveTintColor: '#21c056',
        tabBarInactiveTintColor: '#5d6c74',
        headerShown: false,
    }}>
      <BottomTabs.Screen name="Home" component={WelcomeScreen}
        options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        ),
}} />
      <BottomTabs.Screen name="Projects" component={ProjectsScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="construct" color={color} size={size} />
        ),
      }} />
      <BottomTabs.Screen name="Resources" component={ResourcesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="code-working" color={color} size={size} />
          ),
      }}
      />
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
            drawerStatusBarAnimation: 'slide',
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