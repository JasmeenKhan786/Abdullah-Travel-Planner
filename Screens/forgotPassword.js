import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import firebase from 'firebase';
import { Foundation } from '@expo/vector-icons';
export default class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = { email: '' };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('../assets/bg5.png')}
          style={{ width: '100%', height: '100%' }}>
          <ScrollView>
            <Image
              source={require('../assets/TravelPlaner.png')}
              style={{
                width: '95%',
                height: 200,
                alignSelf: 'center',
                marginTop: 30,
              }}
            />
            <Text
              style={{ fontSize: 22, fontWeight: 'bold', marginLeft: '5%' }}>
              Forgot Password
            </Text>
            <View
              style={{
                flexDirection: 'row',
                width: '90%',
                alignSelf: 'center',
                marginTop: 30,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                backgroundColor: 'rgba(20,20,20,0.5)',
              }}>
              <Foundation name="at-sign" size={20} color="white" />
              <TextInput
                style={{
                  width: '90%',
                  height: 30,
                  paddingLeft: 10,
                  color:'white'

                }}
                placeholder="Email-ID"
                placeholderTextColor="white"
              />
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#fbdfc8',
                width: '90%',
                height: 40,
                marginTop: 30,
                borderRadius: 10,
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                if(this.state.email){
                  firebase
                  .auth()
                  .sendPasswordResetEmail(this.state.email)
                  .then(() => {
                    alert('Email Sent to Reset your password!');
                    this.props.navigation.goBack()
                  })
                  .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    alert(errorMessage);
                  });
                }
                else{
                  alert('Please fill a valid email!')

                }
               
              }}>
              <Text style={{ fontSize: 20, color: 'black' }}>
                Send Reset Password Link
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
