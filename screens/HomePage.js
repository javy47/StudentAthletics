
import React, { Component } from 'react';
import {
   StyleSheet, Text, View, Image, TouchableOpacity
} from 'react-native';
import { Platform, Dimensions } from 'react-native';



//In this function I am creating buttons that on click navigates the user to specific pages
export default class HomePage extends Component {

  render() {
    let IClogo = {
      uri: 'https://www.ithaca.edu/css/cs/marcom/templates/IC-2L-Left-White.png'
    };
    return (

      //This is the tag that i use to make the background of the page teh color '#003B71'
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






//The stylesheet is used to make some aspect of the page different
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
