/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 * jake
 */

import React from 'react';
import { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import SavedDeck from './Components/SavedDeck';
import WorkoutBeginSolo from './Components/WorkoutBeginSolo';
import WorkoutEndsSolo from './Components/WorkoutEndsSolo';
import Leaderboard from './Components/Leaderboard';
import Profile from './Components/Profile';
import NewDeck from './Components/NewDeck'
import ChooseWorkout from './Components/ChooseWorkout'
import axios from 'axios';

const Stack = createStackNavigator();
axios.defaults.headers.post["Content-Type"] = "application/json";

class App extends Component {
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="SavedDeck" component={SavedDeck} />
        <Stack.Screen name="WorkoutBeginSolo" component={WorkoutBeginSolo} />
        <Stack.Screen name="WorkoutEndsSolo" component={WorkoutEndsSolo} />
        <Stack.Screen name="Leaderboard" component={Leaderboard} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ChooseWorkout" component={ChooseWorkout} />
        <Stack.Screen name="NewDeck" component={NewDeck} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}

export default App;
