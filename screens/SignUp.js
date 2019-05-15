
import React, { Component } from 'react';
import {
   StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar, TextInput,
  SafeAreaView, Keyboard, TouchableOpacity
} from 'react-native';

import * as firebase from 'firebase';

/*
  This class with variables that will store the information that a user enters during thier account registration.
  This will then be passed to the firebase paltform and stored for later use.
  Information such as username,password and comfirmation password to later compare the two.

*/
export default class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: ' ',
      password: ' ',
      confirmPassword: ' ',
    }
  }

  //After a user has submitted their password this function is called to compare the two.
  userPasswordCheck = ( password, confirmPassword) => {
      if (password == confirmPassword){
            this.userRegister(this.state.userName, password)
            
      }else{
        alert("Passwords do not match!")
        return;
      }
  }

  //After the passwords are confirmed to be the same this 
  userRegister = (username, password) => {
    try {

      if (password < 6) {
        alert("Please enter a password of length 6")
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(username, password)
      this.props.navigation.navigate('Login')

    }
    catch (error) {
      console.log(error.toString())


    }



  }
  //The  code below renders a few textinput fields that the user has to fill out for thier user name and passwords
  render() {
    let IClogo = {
      uri: 'https://www.ithaca.edu/css/cs/marcom/templates/IC-2L-Left-White.png'
    };
    return (
      // <Application />
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor='#003B71' barStyle='light-content' />
        <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>

          <View style={styles.container} >
            <View style={styles.logoContainer}>
              <Image style={styles.logo}
                source={IClogo}>
              </Image>

            </View>
            <View style={styles.infoContainer}>
              <TextInput style={styles.input}
                placeholder="Enter Email"
                placeholderTextColor='rgba(255,255,255,.8)'
                keyboardType='email-address'
                returnKeyType='next'
                autoCorrect={false}
                onChangeText={(userName) => this.setState({userName})}
                ref={'txtEmail'}
                onSubmitEditing={() => this.refs.txtFirstName.focus()}

              />
              {/* <TextInput style={styles.input}
                placeholder="Enter First Name"
                placeholderTextColor='rgba(255,255,255,.8)'
                keyboardType='email-address'
                returnKeyType='next'
                autoCorrect={false}
                ref={'txtFirstName'}
                onSubmitEditing={() => this.refs.txtLastName.focus()}

              />
              <TextInput style={styles.input}
                placeholder="Enter Last Name"
                placeholderTextColor='rgba(255,255,255,.8)'
                keyboardType='email-address'
                returnKeyType='next'
                autoCorrect={false}
                ref={'txtLastName'}
                onSubmitEditing={() => this.refs.txtSport.focus()}

              />
              <TextInput style={styles.input}
                placeholder="Select Your Sport"
                placeholderTextColor='rgba(255,255,255,.8)'
                keyboardType='email-address'
                returnKeyType='next'
                autoCorrect={false}
                ref={'txtSport'}
                onSubmitEditing={() => this.refs.txtPassword.focus()}

              /> */}
              <TextInput style={styles.input}
                placeholder="Enter Password"
                placeholderTextColor='rgba(255,255,255,.8)'
                returnKeyType='go'
                secureTextEntry={true}
                onChangeText={(password) => this.setState({password})}
                ref={'txtPassword'}
                onSubmitEditing={() => this.refs.txtPasswordAgain.focus()}

              />
              <TextInput style={styles.input}
                placeholder="Enter Password Again"
                placeholderTextColor='rgba(255,255,255,.8)'
                returnKeyType='go'
                onChangeText={(confirmPassword) => this.setState({confirmPassword})}
                secureTextEntry={true}
                ref={'txtPasswordAgain'}

              />
              {/* onPress = {() => this.userSignIn(this.state.userName, this.state.password)} */}
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText} onPress = {() => this.userPasswordCheck(this.state.password, this.state.confirmPassword)}> CREATE ACCOUNT</Text>
              </TouchableOpacity>

            </View>

          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#003B71',
  },
  logoContainer: {
    alignItems: 'center',
    
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
    height: 400,
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
