
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image, Button, TouchableWithoutFeedback, StatusBar, TextInput, console,
   Keyboard, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import * as firebase from 'firebase';




// const firebaseConfig = {
//   apiKey: "AIzaSyBihnv9fE_oflIKVDod_Tz3xi8PxYkwL04",
//   authDomain: "react-native-firebase-b4a9e.firebaseapp.com",
//   databaseURL: "https://react-native-firebase-b4a9e.firebaseio.com",
//   projectId: "react-native-firebase-b4a9e",
//   storageBucket: "react-native-firebase-b4a9e.appspot.com",
// };

// firebase.initializeApp(firebaseConfig)

/*
  This class stores the values of the user name and passwords that will passed to
  firebase to check for teh account. If not then the login attempt will fail.
*/
export default class SignIn extends Component{

    constructor(props){
      super(props)
      this.state={
          userName: ' ',
          password: ' '
      }
    }
    userSignIn = (username, password) =>{
      try{
        firebase.auth().signInWithEmailAndPassword(username, password)
        this.props.navigation.navigate('Home')

       
        }
      catch(error){
          console.log(error.toString())
        
          
      }
        
        

    }

    
    render(){
      let IClogo ={
        uri: 'https://www.ithaca.edu/css/cs/marcom/templates/IC-2L-Left-White.png'
    };
      return(
        
        
            
              <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>

                <View style= {styles.container} >
                  <View style= {styles.logoContainer}>
                      <Image style={styles.logo} 
                        source={IClogo}>
                      </Image>
                      <Text style= {styles.title}>Student Athletes</Text>
                  </View>
                  <View style={styles.infoContainer}>
                      <TextInput style={styles.input}
                          placeholder="Enter username/email"
                          placeholderTextColor= 'rgba(255,255,255,.8)'
                          keyboardType='email-address'
                          returnKeyType='next'
                          autoCorrect={false}
                          onChangeText={(userName) => this.setState({userName})}
                          onSubmitEditing={()=> this.refs.txtPassword.focus()}
                          
                      
                      />
                      <TextInput style={styles.input} 
                        placeholder="Enter password"
                        placeholderTextColor= 'rgba(255,255,255,.8)'
                        returnKeyType='go'
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({password})}
                        ref={'txtPassword'} 
                                            
                      />
                      <TouchableOpacity style={styles.buttonContainer}>
                          <Text style={styles.buttonText } onPress = {() => this.userSignIn(this.state.userName, this.state.password)}> SIGN IN</Text>
                      </TouchableOpacity>

                  </View>
                    
                      <Text style={styles.register}  onPress = {() => this.props.navigation.navigate('Register')}>Not a member? Sign up now, </Text>
                </View>
            </TouchableWithoutFeedback>
      
       
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
    justifyContent: 'center',
    flex: 1,
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
    height: 300,
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



