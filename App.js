
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNavigator from './components/bottomTabNavigator';
import React from "react";

export default class App extends React.Component{
render(){
  return (
    <BottomTabNavigator>

    </BottomTabNavigator>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
