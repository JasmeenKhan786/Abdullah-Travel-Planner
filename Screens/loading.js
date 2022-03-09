import React, { Component } from 'react';
import {
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import firebase from 'firebase'
export default class Loading extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.replace('HomeScreen');
        const uid = user.uid;
      } else {
        this.props.navigation.replace('Login');
      }
    });
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent:'center', alignItems:'center' }}>
        <ActivityIndicator size="large" color="#ebbe9b"/>
      </View>
    );
  }
}
