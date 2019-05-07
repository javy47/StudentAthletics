
import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar, TextInput,
  SafeAreaView, Button, TouchableOpacity
} from 'react-native';
// import {createStackNavigator, createAppContainer} from 'react-navigation';
import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';

import { Platform, Dimensions } from 'react-native';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';
import PostScreen from './PostScreen';




const WIDTH = Dimensions.get('window');

export default class HomePage extends Component {

  render() {
    let IClogo = {
      uri: 'https://www.ithaca.edu/css/cs/marcom/templates/IC-2L-Left-White.png'
    };
    return (


      <View style={{ alignItems: 'center', justifyContent: "center", flex: 1, backgroundColor: '#003B71' }}>

        
          <Image style={styles.logo}
            source={IClogo}>
          </Image>
          <Text style={styles.title}>Student Athletes</Text>
        

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('Post')}> POST PERFORMANCE SNACKS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: 'white', paddingVertical: 15, width: 275, justifyContent: 'center', top: 70, }}>
          <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('Pre')}> PRE PERFORMANCE SNACKS</Text>
        </TouchableOpacity>
      </View>



    );

  }
}







const styles = StyleSheet.create({
  row: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 15,
    marginBottom: 5,
    backgroundColor: '#003B71',

  },
  text: {
    color: 'white',
  },

  container: {
    flex: 1,
    // marginTop: 20,
  },
  logoContainer: {
    alignItems: 'center',
    
    flex: 1,
  },
  logo: {
    width: 130,
    height: 45,
    backgroundColor: '#003B71',
    



  },
  title: {
    color: '#FFBB00',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5,
    opacity: .9,
  },
  infoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,
    height: 300,
    // backgroundColor: 'red',
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,.2)',
    color: '#FFFFFF',
    marginBottom: 20,
    paddingHorizontal: 10,
    justifyContent: 'center'

  },
  buttonContainer: {
    backgroundColor: '#f7c744',
    paddingVertical: 15,
    width: 275,
    justifyContent: 'center',
    top: 50,
    



  },
  buttonText: {
    textAlign: 'center',
    color: '#003B71',
    fontSize: 18,
    fontWeight: 'bold',
  },
  register: {
    height: 75,
    paddingHorizontal: 40,
    color: 'rgba(255,255,255,.2)',
  }


})
