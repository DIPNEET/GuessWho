
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from "./screens/Login";
import Rules from "./screens/Rules";
import RoomId from "./screens/RoomId";
import Characters from "./screens/Characters";
import Messages from "./screens/Messages";
import { createSwitchNavigator,  createAppContainer } from 'react-navigation'


export default class App extends React.Component {
  render(){
  return (
   
      <AppContainer/>
    
   
  
  )};
}



const switchNavigator = createSwitchNavigator({
  
  Login:{screen:Login},
  Rules:{screen:Rules},
  RoomId:{screen:RoomId},
  Characters:{screen:Characters},
  Messages:{screen:Messages}
})

const AppContainer = createAppContainer(switchNavigator)


