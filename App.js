import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FacebookScreen from './screens/FacebookScreen'
import InstagramScreen from './screens/InstagramScreen'

export default class App extends React.Component{
  render(){
    return(
      <AppContainer />
    )
  }
}


  

  const TabNavigator = bottomTabNavigator({
    Facebook: {screen:FacebookScreen},
    Instagram: {screen:instagramScreen},
  });

  const AppContainer =  createAppContainer(TabNavigator);

  const styles = StyleSheet.create({
    container:{
      flex: 1, 
      BackgroundColor:'yellow',
      alignItems:'center',
      justifyContent:'center',
    },
  });