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
import {
  Foundation,
  AntDesign,
  Ionicons,
  MaterialIcons, 
} from '@expo/vector-icons';
import firebase from 'firebase';
import db from '../Config';
export default class Signup extends Component {
  constructor() {
    super();
    this.state = { email: '', password: '', confirmPassword: '',name:'',country:'',contact:'' };
  }
  signUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((userCredential) => {
        alert('User created! Welcome to Travel Planner');
        db.collection('user').add({
          email: this.state.email,
          name: this.state.name, 
          contact:this.state.contact,
          country:this.state.country,
        });
        this.props.navigation.replace('HomeScreen');
      })

      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };
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
              SignUp
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
                onChangeText={(val) => {
                  this.setState({ email: val });
                }}
              />
            </View>
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
              <AntDesign name="user" size={20} color="white" />
              <TextInput
                style={{
                  width: '90%',
                  height: 30,
                  paddingLeft: 10,
                  color:'white'

                }}
                placeholder="Name"
                placeholderTextColor="white"
                onChangeText={(val) => {
                  this.setState({ name: val });
                }}
              />
            </View>
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
              <MaterialIcons name="location-city" size={20} color="white" />
              <TextInput
                style={{
                  width: '90%',
                  height: 30,
                  paddingLeft: 10,
                  color:'white'

                }}
                placeholder="Country"
                placeholderTextColor="white"
                onChangeText={(val) => {
                  this.setState({ country: val });
                }}
              />
            </View>
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
              <Ionicons name="call-outline" size={20} color="white" />
              <TextInput
                style={{
                  width: '90%',
                  height: 30,
                  paddingLeft: 10,
                  color:'white'

                }}
                placeholder="Contact"
                placeholderTextColor="white"
                onChangeText={(val) => {
                  this.setState({ contact: val });
                }}
              />
            </View>
            
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
              <AntDesign name="lock" size={20} color="white" />
              <TextInput
                style={{
                  width: '85%',
                  height: 30,
                  paddingLeft: 10,
                  color:'white'

                }}
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor="white"
                onChangeText={(val) => {
                  this.setState({ password: val });
                }}
              />
              <Ionicons name="ios-eye-off-outline" size={20} color="white" />
            </View>
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
              <AntDesign name="lock" size={20} color="white" />
              <TextInput
                style={{
                  width: '85%',
                  height: 30,
                  paddingLeft: 10,
                  color:'white'

                }}
                placeholder="Confirm Password"
                placeholderTextColor="white"
                onChangeText={(val) => {
                  this.setState({ confirmPassword: val });
                }}
                secureTextEntry={true}

              />
              <Ionicons name="ios-eye-off-outline" size={20} color="white" />
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
                if(this.state.email && this.state.password && this.state.confirmPassword && this.state.name && this.state.country && this.state.contact){
                  if(this.state.password === this.state.confirmPassword){
                    this.signUp();
                  }
                  else{
                    alert('Paswords dont match')
                  }

                }
                else{
                  alert('Please fill all the details')

                } 
              }}>
              <Text style={{ fontSize: 25, color: 'black' }}>SignUp</Text>
            </TouchableOpacity>
            <Text
              style={{ alignSelf: 'center', marginTop: 30, color: 'white' }}>
              Already have an account?{' '}
              <Text
                style={{ color: 'blue', fontWeight: 'bold' }}
                onPress={() => {
                  this.props.navigation.replace('Login');
                }}>
                Login
              </Text>
            </Text>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
