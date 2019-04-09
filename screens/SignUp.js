
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar, TextInput,
  SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';


export default class SignUp extends Component{
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
                      <Text style= {styles.title}>Student Athletes</Text>
                  </View>
                  <View style={styles.infoContainer}>
                      <TextInput style={styles.input}
                          placeholder="Enter username/email"
                          placeholderTextColor= 'rgba(255,255,255,.8)'
                          keyboardType='email-address'
                          returnKeyType='next'
                          autoCorrect={false}
                          onSubmitEditing={()=> this.refs.txtPassword.focus()}
                      
                      />
                      <TextInput style={styles.input} 
                        placeholder="Enter password"
                        placeholderTextColor= 'rgba(255,255,255,.8)'
                        returnKeyType='go'
                        secureTextEntry={true}
                        ref={'txtPassword'} 
                                            
                      />
                      <TouchableOpacity style={styles.buttonContainer}>
                          <Text style={styles.buttonText}> SIGN IN</Text>
                      </TouchableOpacity>

                  </View>
                      <Text style={styles.register}>Not a member? Sign up now, </Text>
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
  