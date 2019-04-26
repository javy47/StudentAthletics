
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar, TextInput,
  SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator} from 'react-navigation';
import SignUp from  './screens/SignUp';
import SignIn from  './screens/SignIn';
import HomePage from './screens/HomePage';
import ProfileScreen from './screens/ProfileScreen';  
import SettingScreen from './screens/SettingScreen';
import ScheduleScreen from './screens/ScheduleScreen';



export class seniorproject extends Component{
  render(){
      return(
          <App />
      );
  }
}

// const AppSwitchNavigator = createSwitchNavigator({
//   Login : {screen: SignIn},
//   Home: { screen: HomePage},
// })


const AppStackNavigator = createStackNavigator({
  Login : {screen: SignIn},
  Register : SignUp,
  Home : HomePage,
  Schedule: ScheduleScreen,
},
  {headerMode: 'none'
});





const App = createAppContainer(AppStackNavigator);


export default App;


AppRegistry.registerComponent('seniorproject', () => seniorproject);