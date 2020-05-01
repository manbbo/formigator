import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NameGenerator from './src/screens/NameGenerator'
import GenerateText from './src/screens/TextGenerator'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons'

const tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'C R I A R    N O M E') {
              iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
            } else if (route.name === 'F A L A R') {
              iconName = focused ? 'ios-volume-high' : 'ios-volume-mute';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <tab.Screen name ='C R I A R    N O M E' component ={NameGenerator}/>
        <tab.Screen name = 'F A L A R' component = {GenerateText}/>
      </tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
