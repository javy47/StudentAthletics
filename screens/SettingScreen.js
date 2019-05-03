
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar, TextInput,
  SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';


export default class SettingScreen extends Component{
    render(){
      let IClogo ={
        uri: 'https://www.ithaca.edu/css/cs/marcom/templates/IC-2L-Left-White.png'
    };
      return(
        // <Application />
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#003B71' barStyle='light-content'/>
              <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>

                <View style= {styles.container} >
                  <View style= {styles.logoContainer}>
                      <Image style={styles.logo} 
                        source={IClogo}>
                      </Image>
                      
                  </View>
                  <View style={styles.infoContainer}>
                      

                  </View>
                     
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
       
      );
    }
}
const styles= StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',    
      backgroundColor: '#003B71',
    },
    logoContainer: { 
      alignItems: 'center',
      height: 200,
    },
    logo: {
      width: 130,
      height: 45,
  
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
      height: 600,
      // backgroundColor: 'red',
    },
    input: {
      height: 40,
      backgroundColor: 'rgba(255,255,255,.2)',
      color:'#FFFFFF',
      marginBottom: 20,
      paddingHorizontal: 10,
      justifyContent: 'center'
  
    },
    buttonContainer: {
      backgroundColor: '#f7c744',
      paddingVertical: 15,
      width: 200,
      justifyContent: 'center'
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
  