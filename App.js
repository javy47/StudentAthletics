
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar, TextInput,
  SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator, createBottomTabNavigator} from 'react-navigation';
// import {Icon} from 'react-native-elements'
import * as firebase from 'firebase';




import SignUp from  './screens/SignUp';
import SignIn from  './screens/SignIn';
import HomePage from './screens/HomePage';
import ProfileScreen from './screens/ProfileScreen';  
import SettingScreen from './screens/SettingScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import PostScreen from './screens/PostScreen';
import PreScreen from './screens/PreScreen';


const firebaseConfig = {
    apiKey: "AIzaSyBihnv9fE_oflIKVDod_Tz3xi8PxYkwL04",
    authDomain: "react-native-firebase-b4a9e.firebaseapp.com",
    databaseURL: "https://react-native-firebase-b4a9e.firebaseio.com",
    projectId: "react-native-firebase-b4a9e",
    storageBucket: "react-native-firebase-b4a9e.appspot.com",
};

firebase.initializeApp(firebaseConfig)

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>

);
export class seniorproject extends Component{
  render(){
      return(
        <DismissKeyboard>
            <App />
        </DismissKeyboard>
        
      );
  }
}

// const AppSwitchNavigator = createSwitchNavigator({
//   Login : {screen: SignIn},
//   Home: { screen: HomePage},
// })


const Home = createStackNavigator({
  Home : HomePage,
  Post: PostScreen,
  Pre: PreScreen,
  // Login : {screen: SignIn},
  // Register : SignUp,
  // Schedule: ScheduleScreen,
},
  {headerMode: 'none'
});

let Tabs = createBottomTabNavigator({
  
  Login : SignIn,
  Register : SignUp,
  Home,
  Schedule: ScheduleScreen,
    

},
 {tabBarOptions: {
    activeTintColor: '#FFBB00',
    labelStyle: {
      fontSize: 15,
    },
    style: {
      backgroundColor: '#ffffff',
    }
 }}

  
);



const App = createAppContainer(Tabs);


export default App;


AppRegistry.registerComponent('seniorproject', () => seniorproject);