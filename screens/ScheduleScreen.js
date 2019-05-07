
import React, {Component} from 'react';
import { Modal,  TouchableHighlight, StyleSheet, Text, View, Image, TouchableWithoutFeedback, TextInput,
  Keyboard, TouchableOpacity,} from 'react-native';

import  {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {Dropdown} from 'react-native-material-dropdown';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';


const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>

);

export default class ScheduleScreen extends Component{

    state = {
      modalVisible: false,
    }

    setModalVisible(visible){
      this.setState({modalVisible: visible});
    }
  
    render(){
      let data = [{
        value: 'AM',
      },{
        value: 'PM',
      }];

      let IClogo ={
        uri: 'https://www.ithaca.edu/css/cs/marcom/templates/IC-2L-Left-White.png'
    };
      return(
        <View>



        </View>
       
       
      );
    }
}
const styles= StyleSheet.create({
    move:{
      
      left:30,
      top: 100,
      position: "absolute",

    },
    modalOptions:{
        height: 100,
        width: 100,
        
        position:'absolute',
        right: 50,
    },
    modalScheme: {
      backgroundColor: '#FFBB00',
      justifyContent: 'center',
      flex: 1,
      

    },
    modalContent:{
      color: 'white',
      textAlign: 'center',
      fontSize: 18,
      bottom: 250,


    },
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
      height: 100,
      width: 250,
      backgroundColor: 'rgba(255,255,255,.2)',
      color:'#FFFFFF',
      marginBottom: 20,
      paddingHorizontal: 10,
      height: 100,
      
  
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
  