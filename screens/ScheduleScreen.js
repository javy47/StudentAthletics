
import React, {Component} from 'react';
import { Modal,  TouchableHighlight, StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar, TextInput,
  SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
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
        // <Application />
        
              <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>

                <View  >
                    
                <CalendarList 
                    style={{ borderColor: '#f7c744', height: 700}}
                    theme={{
                        backgroundColor: '#ffffff',
                        calendarBackground: '#ffffff',
                        textSectionTitleColor: '#b6c1cd',
                        selectedDayBackgroundColor: '#00adf5',
                        selectedDayTextColor: '#ffffff',
                        todayTextColor: '#00adf5',
                        dayTextColor: '#2d4150',
                        textDisabledColor: '#d9e1e8',
                        dotColor: '#00adf5',
                        selectedDotColor: '#ffffff',
                        arrowColor: 'orange',
                        monthTextColor: '#f7c744',
                        textDayFontFamily: 'monospace',
                        textMonthFontFamily: 'Helvetica',
                        textDayHeaderFontFamily: 'monospace',
                        textMonthFontWeight: 'bold',
                        textDayFontSize: 16,
                        textMonthFontSize: 16,
                        textDayHeaderFontSize: 16
                      }}
                // Callback which gets executed when visible months change in scroll view. Default = undefined
                onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
                // Max amount of months allowed to scroll to the past. Default = 50
                pastScrollRange={50}
                // Max amount of months allowed to scroll to the future. Default = 50
                futureScrollRange={50}
                // Enable or disable scrolling of calendar list
                scrollEnabled={true}
                // Enable or disable vertical scroll indicator. Default = false
                showScrollIndicator={true}
                // Handler which gets executed on day press. Default = undefined
                //onDayPress={(day) => {alert(day.dateString +"                   "+day.timestamp)}}
                onDayPress={(day) => {this.setModalVisible(true)}}

                markingType={'multi-dot'}
                
                />
                
                <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                }}>
                      <View style= {styles.modalScheme} >
                      <View >
                        <Text style= {styles.modalContent}>Event Creation</Text>
                          <View style= {styles.modalOptions}>
                              <Dropdown
                            label= 'Time'
                            data={data} />

                          </View>
                          <View style= {styles.move}>
                            <AutoGrowingTextInput style={styles.input} placeholder={'Your Message'} />
                          </View>
                          
                       
                                         


                        <TouchableHighlight
                          onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                          }}>
                          <Text>Submit</Text>
                        </TouchableHighlight>
                      </View>
                     </View>


                </Modal>
                     
                </View>
            </TouchableWithoutFeedback>
       
       
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
  