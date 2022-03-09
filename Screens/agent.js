import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import db from "../Config";
import { FontAwesome5 } from "@expo/vector-icons";

//#fbdfc8

export default class Agent extends Component {
  getdata = async () => {
    var r = await db.collection("agents").get();
    r.docs.map((e) => {
      var temp = this.state.agents;
      temp.push(e.data());
      this.setState({ agents: temp });
    });
  };
  componentDidMount() {
    this.getdata();
  }
  constructor() {
    super();
    this.state = { agents: [] };
  }

  render() {
    if (this.state.agents.length === 0) {
      return (
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={require("../assets/bg4.png")}
            style={{ width: "100%", height: "100%" }}
          >
            <ScrollView>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "100%",
                  paddingTop: "10%",
                  backgroundColor: "rgba(206,141,110,1)",
                  paddingBottom: 5,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.goBack();
                  }}
                >
                  <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text
                  style={{ fontSize: 16, fontWeight: "bold", color: "white" }}
                >
                  Agents
                </Text>
                <Text></Text>
              </View>

              <Text
                style={{ 
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "white",
                  alignSelf: "center",
                  textAlign: "center",
                  marginTop: "30%",
                }}
              >
                All Our Agents will appear here!
              </Text>
            </ScrollView>
          </ImageBackground>
        </View>
      );
    } else {
    
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../assets/bg4.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <ScrollView>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
                paddingTop: "10%",
                backgroundColor: "rgba(206,141,110,1)",
                paddingBottom: 5,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.goBack();
                }}
              >
                <Ionicons name="arrow-back" size={24} color="white" />
              </TouchableOpacity>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
              >
                Agents
              </Text>
              <Text></Text>
            </View>

            <View>
              {this.state.agents.map((q,i) => {
                return (
                  <View
                   key={i}
                    style={{
                      backgroundColor: "#fef9e7",
                      width: "90%",
                      marginTop: 15,
                      borderRadius: 10,
                      alignSelf: "center",
                      padding: 10,
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Image
                        style={{ width: 100, height: 100, borderRadius: 50 }}
                        source={{
                          uri: "https://rawafid.sa/wp-content/uploads/2019/10/istockphoto-513895824-612x612.jpg",
                        }}
                      />
                      <View style={{}}>
                        <Text
                          style={{
                            fontSize: 19,
                            fontWeight: "bold",
                            marginLeft: 15,
                          }}
                        >
                          {q.name}
                        </Text>
                        <Text style={{ color: "grey", marginLeft: 15 }}>
                          {q.email}
                        </Text>
                        <Image
                          source={require("../assets/star.png")}
                          style={{
                            width: 80,
                            height: 20,
                            resizeMode: "cover",
                            marginLeft: 10,
                            marginVertical: 5,
                          }}
                        />
                        <TouchableOpacity
                          onPress={() => {
                            this.props.navigation.navigate("Customs", {
                              agentEmail: q.email,
                              agentName: q.name,
                            });
                          }}
                          style={{ marginLeft: 15 }}
                        >
                          <FontAwesome5
                            name="long-arrow-alt-right"
                            size={24}
                            color="black"
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
            }
  }
}
