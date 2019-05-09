
import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar, TextInput,
  SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView, FlatList, ActivityIndicator
} from 'react-native';
// import {createStackNavigator, createAppContainer} from 'react-navigation';
import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';

import { Platform, Dimensions } from 'react-native';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';




const WIDTH = Dimensions.get('window');

export default class PostScreen extends Component {
  constructor() {
    super()
    this.state = {
      dataSource: []
    }
  }
  renderItem = ({ item }) => {

    return (
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <Image style={styles.logo}
        source={{ uri: item.image }} />
        <View style={{flex: 1,justifyContent: 'center', backgroundColor: '#003B71', }}>
          <Text style={ {color: '#FFBB00', fontSize: 18,fontWeight: 'bold' } } onPress={() => alert("Ingredients Page for  \n"+item.Food)}> {item.Food}</Text>
          <Text style={ styles.text  }> Calories:{item.Calories}</Text>
          <Text style={ styles.text  }> Fat:{item.Fat}</Text>
          <Text style={ styles.text  }> Protein:{item.Protein}</Text>
          <Text style={ styles.text  }> Carbs:{item.Carbohydrates}</Text>
        </View>
      </View>

    )


  }
  componentDidMount() {
    const url = 'https://next.json-generator.com/api/json/get/4yA-ZpFj8'

    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.post_performance
        })


      })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    let IClogo = {
      uri: 'https://www.ithaca.edu/css/cs/marcom/templates/IC-2L-Left-White.png'
    };
    return (

      <SafeAreaView >
        <StatusBar backgroundColor='#003B71' barStyle='light-content' />


        <View  >

          <FlatList 

            data={this.state.dataSource}
            renderItem={this.renderItem}
          />


        </View>

      </SafeAreaView>

    );
  }
}







const styles = StyleSheet.create({
  row:{
    flex: 1, justifyContent: 'center', alignItems: 'center',  padding: 15,
    marginBottom: 5,
    backgroundColor: '#003B71',
    
  },
  text:{
    color: 'white',
  },
  
  container: {
    flex: 1,
    // marginTop: 20,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logo: {
    width: 100,
    height: 100,
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
