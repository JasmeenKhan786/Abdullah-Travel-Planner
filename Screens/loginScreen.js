import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  Foundation,
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import db from "../Config";
import firebase from "firebase";
export default class Login extends React.Component {
  constructor() {
    super();
    this.state = { email: "", password: "" };
  }
  login = async () => {
    var response = await db
      .collection("user")
      .where("email", "==", this.state.email)
      .get();

    console.log(response.docs.length);
    if (response.docs.length === 1) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((userCredential) => {
          alert("Welcome to Travel Planner");

          this.props.navigation.replace("HomeScreen");
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage);
        });
    } else {
      alert("Sorry! User not found, try signing up or check your details!");
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../assets/bg5.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <ScrollView>
            <Image
              source={require("../assets/TravelPlaner.png")}
              style={{
                width: "95%",
                height: 200,
                alignSelf: "center",
                marginTop: 30,
              }}
            />
            <Text
              style={{ fontSize: 22, fontWeight: "bold", marginLeft: "5%" }}
            >
              Login
            </Text>
            <View
              style={{
                flexDirection: "row",
                width: "90%",
                alignSelf: "center",
                marginTop: 30,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                backgroundColor: "rgba(20,20,20,0.5)",
              }}
            >
              <Foundation name="at-sign" size={20} color="white" />
              <TextInput
                style={{
                  width: "90%",
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
                flexDirection: "row",
                width: "89%",
                alignSelf: "center",
                marginTop: 30,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                backgroundColor: "rgba(20,20,20,0.5)",
              }}
            >
              <AntDesign name="lock" size={20} color="white" />
              <TextInput
                style={{
                  width: "85%",
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
            <Text
              style={{
                marginTop: 10,
                color: "blue",
                fontWeight: "bold",
                alignSelf: "flex-end",
                marginHorizontal: "5%",
              }}
              onPress={() => {
                this.props.navigation.navigate("ForgotPassword");
              }}
            >
              Forgot Password?
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#fbdfc8",
                width: "90%",
                height: 40,
                marginTop: 30,
                borderRadius: 10,
                alignSelf: "center", 
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                if (this.state.email && this.state.password) {
                  this.login();
                } else {
                  alert("Please fill all the details!");
                }
              }}
            >
              <Text style={{ fontSize: 25, color: "black" }}>Login</Text>
            </TouchableOpacity>
            <Text
              style={{ color: "white", alignSelf: "center", marginTop: 20 }}
            >
              or
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignSelf: "center",
                backgroundColor: "white",
                width: "90%",
                height: 40,
                marginTop: 20,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                alert("Feature Coming Soon!");
              }}
            >
              <MaterialCommunityIcons
                name="google-chrome"
                size={24}
                color="grey"
              />
              <Text style={{ marginLeft: 30, color: "grey" }}>
                Login with Google
              </Text>
            </TouchableOpacity>
            <Text
              style={{ alignSelf: "center", marginTop: 30, color: "white" }}
            >
              New to Travel Planner?{" "}
              <Text
                style={{ color: "blue", fontWeight: "bold" }}
                onPress={() => {
                  this.props.navigation.replace("Signup");
                }}
              >
                Register
              </Text>
            </Text>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
