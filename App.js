
import React, {Component} from 'react';
import {AppRegistry, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import * as firebase from 'firebase';


/*
  The import below are for the pages that were created in the screens folder.
  They have been imported to the Apps.js folder so that the navigation can access
  them.
*/

import SignUp from  './screens/SignUp';
import SignIn from  './screens/SignIn';
import HomePage from './screens/HomePage';
// import ProfileScreen from './screens/ProfileScreen';  
// import SettingScreen from './screens/SettingScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import PostScreen from './screens/PostScreen';
import PreScreen from './screens/PreScreen';

/*
  This variable contains a dictionary of the apikey, authDomain, databseurl projectId and storageBucket.
  This allows you to connect to the Firebase platform. These keys are specific to theproject that I created on
  the firebase site.
*/
const firebaseConfig = {
    apiKey: "AIzaSyBihnv9fE_oflIKVDod_Tz3xi8PxYkwL04",
    authDomain: "react-native-firebase-b4a9e.firebaseapp.com",
    databaseURL: "https://react-native-firebase-b4a9e.firebaseio.com",
    projectId: "react-native-firebase-b4a9e",
    storageBucket: "react-native-firebase-b4a9e.appspot.com",
};
 //Establishes the connection between the app and the firsbase platform
firebase.initializeApp(firebaseConfig)

//This allows touch actions away from the keyboard press interaction to make the keyboard disappear
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

//This is the construction of the navigation that is on the home page
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

//This creates the navigation that can be used to interact with everything in the app
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


//in the new version on react navigation you have to wrap your navigation in a createAppContainer
const App = createAppContainer(Tabs);

//this variable has to be the default state of the App.js file
export default App;

//If you create your project without expo you have to add this line of code in your App.js file
AppRegistry.registerComponent('seniorproject', () => seniorproject);