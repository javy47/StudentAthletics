
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar, TextInput,
  SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import SignUp from  './screens/SignUp';
import SignIn from  './screens/SignIn';
import HomePage from './screens/HomePage';


export class seniorproject extends Component{
  render(){
      return(
          <AppStackNavigator />
      );
  }
}

const AppStackNavigator = createStackNavigator({
  Login : {screen: SignIn},
  Register : SignUp,
  Home : HomePage},
  {headerMode: 'float'
});

const App = createAppContainer(AppStackNavigator);

export default App;


AppRegistry.registerComponent('seniorproject', () => seniorproject);