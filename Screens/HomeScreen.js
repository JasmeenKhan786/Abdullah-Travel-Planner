import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import firebase from "firebase";
import db from "../Config";

export default class HomeScreen extends React.Component {
  getdata = async () => {
    var r = await db.collection("attraction").limit(3).get();
    r.docs.map((e) => {
      var temp = this.state.atraction;
      temp.push(e.data());
      this.setState({ atraction: temp });
    });
  };
  componentDidMount() {
    this.getdata();
  }
  constructor() {
    super();
    this.state = { atraction: [] };
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <LinearGradient
          colors={["#e7a977", "#ebbe9b"]}
          style={{ flex: 1, width: "100%", height: "100%" }}
        >
          <ScrollView>
            <View
              style={{
                marginTop: "15%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginHorizontal: "5%",
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Home</Text>
              <TouchableOpacity
                onPress={() => {
                  firebase
                    .auth()
                    .signOut()
                    .then(() => {
                      this.props.navigation.navigate("Login");
                    })
                    .catch((error) => {
                      alert("Something went wrong! Try later!");
                    });
                }}
              >
                <MaterialIcons name="logout" size={24} color="black" />
              </TouchableOpacity>
            </View>

            <Text
              style={{ marginHorizontal: "5%", marginTop: 30, fontSize: 24 }}
            >
              Get the best customized plans for your next trip with Travel
              Planner
            </Text>

            <View
              style={{
                width: "90%",
                backgroundColor: "#ccc",
                alignSelf: "center",
                marginTop: 40,
                borderRadius: 10,
              }}
            >
              <LinearGradient
                colors={["#fef9e7", "#fef9e7"]}
                style={{
                  flex: 1,
                  width: "100%",
                  height: "100%",
                  padding: 15,
                  borderRadius: 10,
                }}
              >
                <Text style={{ fontSize: 16, textAlign: "center" }}>
                  Pick amongst our best agents and give us your requirements, we
                  will suggest your customized plan
                </Text>
                <TouchableOpacity
                  style={{
                    alignSelf: "center",
                    backgroundColor: "#ebbe9b",
                    borderRadius: 10,
                    padding: 10,
                    marginTop: 10,
                  }}
                  onPress={() => {
                    this.props.navigation.navigate("Agent");
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Pick My Agent
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>

            <View
              style={{
                marginHorizontal: "5%",
                marginTop: 30,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                }}
              >
                Recommended locations
              </Text>
              <Text 
                style={{ color: "grey", textDecorationLine: "underline" }}
                onPress={() => {
                  this.props.navigation.navigate("Atraction");
                }}
              >
                See All
              </Text>
            </View>

            <ScrollView horizontal={true}>
              {this.state.atraction.length === 0 ? (
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      color: "white",
                      flex:1,
                      marginHorizontal:30,
                      marginTop: "30%",
                    }}
                  >
                    Explore Best Places in Saudi Arabia!
                  </Text>
              ) : (
                this.state.atraction.map((a,i) => {
                  return (
                    <View
                    key={i}
                      style={{
                        marginVertical: 20,
                        width: 250,
                        height: 250,
                        marginHorizontal: 10,
                        borderRadius: 15,
                      }}
                    >
                      <LinearGradient
                        colors={["#fef9e7", "#fef9e7"]}
                        style={{
                          flex: 1,
                          width: "100%",
                          height: "100%",
                          padding: 4,
                          borderRadius: 15,
                        }}
                      >
                        <Image
                          source={{ uri: a.image }}
                          style={{
                            width: "95%",
                            height: "70%",
                            borderRadius: 15,
                            alignSelf: "center",
                            marginTop: 5,
                          }}
                        />
                        <Text
                          style={{
                            color: "black",
                            marginHorizontal: "5%",
                            fontSize: 15,
                            marginTop: 5,
                            fontWeight: "500",
                          }}
                        >
                          {a.title}
                        </Text>
                        <Text
                          style={{
                            color: "black",
                            marginTop: 5,
                            marginHorizontal: "5%",
                          }}
                        >
                          Saudi
                        </Text>
                      </LinearGradient>
                    </View>
                  );
                })
              )}
            </ScrollView>
          </ScrollView>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
