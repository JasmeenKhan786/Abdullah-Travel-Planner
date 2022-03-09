import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Picker,
  ScrollView,
} from "react-native";
import db from "../Config";
import firebase from "firebase";
import DatePicker from "react-native-datepicker";
import { Ionicons } from "@expo/vector-icons";

export default class AddPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      endDate: null,
      np: 0,
      kids: 0,
      pets: "",
      budget: 0,
      extra: "",
      planType: "",
      foodType: "",
      adventure: "",
    };
  }
  addData = () => {
    db.collection("request").add({
      date: this.state.date,
      endDate: this.state.endDate,
      userEmail: firebase.auth().currentUser.email,
      np: this.state.np,
      agentEmail: this.props.route.params.agentEmail,
      agentName: this.props.route.params.agentName,
      agentResponse: "",
      status: "Pending",
      kids: this.state.kids,
      budget: this.state.budget,
      pets: this.state.pets,
      extra: this.state.extra,
      foodType: this.state.foodType,
      planType: this.state.planType,
      adventure: this.state.adventure,
    });
    alert("Plan submitted successfully!");
    this.props.navigation.navigate("Customs");
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fef9e7" }}>
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
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
            Add New Plan
          </Text>
          <Text></Text>
        </View>
        <ScrollView>
          <TextInput
            style={{
              width: "90%",
              height: 40,
              alignSelf: "center",
              marginTop: 30,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              backgroundColor: "rgba(122, 74, 42,0.5)",
              paddingLeft: 10,
            }}
            placeholder="Your Budget"
            placeholderTextColor="white"
            onChangeText={(val) => {
              this.setState({ budget: val });
            }}
          />

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <DatePicker
              showIcon={false}
              androidMode="spinner"
              style={{ width: "90%" }}
              date={this.state.date}
              mode="date"
              placeholder="Start Date "
              format="DD-MM-YYYY"
              confirmBtnText="Chọn"
              cancelBtnText="Hủy"
              customStyles={{
                dateInput: {
                  backgroundColor: "rgba(122, 74, 42,0.5)",


                  borderRadius: 10,
                  color: "white",
                },
                dateText: {
                  color: "white",
                },
              }}
              onDateChange={(date) => {
                this.setState({ date: date });
              }}
            />
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <DatePicker
              showIcon={false}
              androidMode="spinner"
              style={{ width: "90%", color: "white" }}
              date={this.state.endDate}
              mode="date"
              placeholder="End Date"
              format="DD-MM-YYYY"
              confirmBtnText="Chọn"
              cancelBtnText="Hủy"
              customStyles={{
                dateInput: {
                  backgroundColor: "rgba(122, 74, 42,0.5)",


                  borderRadius: 10,
                },
                dateText: {
                  color: "white",
                },
              }}
              onDateChange={(date) => {
                this.setState({ endDate: date });
              }}
            />
          </View>

          <View
            style={{
              backgroundColor: "rgba(122, 74, 42,0.5)",

              width: "90%",
              height: 40,
              marginTop: 20,
              borderRadius: 10,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Picker
              mode="dropdown"
              selectedValue={this.state.np}
              style={{
                color: "white",
                paddingLeft: 10,
                width: "100%",
              }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({
                  np: itemValue,
                })
              }
            >
              <Picker.Item label="People" value="" />
              <Picker.Item label="1-5" value="1-5" />
              <Picker.Item label="5-10" value="5-10" />
              <Picker.Item label=">10" value="10>" />
            </Picker>
          </View>
          <View
            style={{
              backgroundColor: "rgba(122, 74, 42,0.5)",

              width: "90%",
              height: 40,
              marginTop: 20,
              borderRadius: 10,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Picker
              mode="dropdown"
              selectedValue={this.state.kids}
              style={{
                color: "white",
                paddingLeft: 10,
                width: "100%",
              }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({
                  kids: itemValue,
                })
              }
            >
              <Picker.Item label="Kids" value="" />
              <Picker.Item label="None" value="None" />

              <Picker.Item label="1-5" value="1-5" />
              <Picker.Item label="5-10" value="5-10" />
              <Picker.Item label=">10" value="10>" />
            </Picker>
          </View>
          <View
            style={{
              backgroundColor: "rgba(122, 74, 42,0.5)",

              width: "90%",
              height: 40,
              marginTop: 20,
              borderRadius: 10,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Picker
              mode="dropdown"
              selectedValue={this.state.planType}
              style={{
                color: "white",
                paddingLeft: 10,
                width: "100%",
              }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({
                  planType: itemValue,
                })
              }
            >
              <Picker.Item label="Type of plan" value="" />
              <Picker.Item label="Family" value="Family" />
              <Picker.Item label="Couple" value="Couple" />
              <Picker.Item label="Bachelor" value="Bachelor" />
              <Picker.Item label="Business" value="Business" />
              <Picker.Item label="Religious" value="Religious" />
              <Picker.Item label="Others" value="Others" />
            </Picker>
          </View>

          <View
            style={{
              backgroundColor: "rgba(122, 74, 42,0.5)",

              width: "90%",
              height: 40,
              marginTop: 20,
              borderRadius: 10,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Picker
              mode="dropdown"
              selectedValue={this.state.foodType}
              style={{
                color: "white",
                paddingLeft: 10,
                width: "100%",
              }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({
                  foodType: itemValue,
                })
              }
            >
              <Picker.Item label="Type of food" value="" />
              <Picker.Item label="Veg" value="Veg" />
              <Picker.Item label="Non-Veg" value="Non-Veg" />
              <Picker.Item label="Vegan" value="Vegan" />
              <Picker.Item label="All" value="All" />
            </Picker>
          </View>

          <View
            style={{
              backgroundColor: "rgba(122, 74, 42,0.5)",

              width: "90%",
              height: 40,
              marginTop: 20,
              borderRadius: 10,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Picker
              mode="dropdown"
              selectedValue={this.state.adventure}
              style={{
                color: "white",
                paddingLeft: 10,
                width: "100%",
              }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({
                  adventure: itemValue,
                })
              }
            >
              <Picker.Item label="Open to Adventure/Extreme Sports" value="" />
              <Picker.Item label="No" value="No" />
              <Picker.Item label="Yes" value="Yes" />
              <Picker.Item label="May Be" value="May Be" />
            </Picker>
          </View>

          <View
            style={{
              backgroundColor: "rgba(122, 74, 42,0.5)",

              width: "90%",
              height: 40,
              marginTop: 20,
              borderRadius: 10,
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Picker
              mode="dropdown"
              selectedValue={this.state.pets}
              style={{
                color: "white",
                width: "100%",
                paddingLeft: 10,
              }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({
                  pets: itemValue,
                })
              }
            >
              <Picker.Item label="Open to Pets" value="" />
              <Picker.Item label="No" value="No" />
              <Picker.Item label="Yes" value="Yes" />
              <Picker.Item label="May Be" value="May Be" />
            </Picker>
          </View>

          <TextInput
            style={{
              width: "90%",
              height: 40,
              alignSelf: "center",
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              backgroundColor: "rgba(122, 74, 42,0.5)",

              paddingLeft: 10,
            }}
            placeholder="Extra Information"
            placeholderTextColor="white"
            onChangeText={(val) => {
              this.setState({ extra: val });
            }}
          /> 

          <TouchableOpacity
            style={{
              backgroundColor: "rgba(230,141,110,1)",
              width: "70%",
              height: 40,
              marginTop: 30,
              marginBottom: 20,
              borderRadius: 10,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              if (
                this.state.budget &&
                this.state.date &&
                this.state.endDate &&
                this.state.foodType &&
                this.state.planType &&
                this.state.kids &&
                this.state.np &&
                this.state.adventure &&
                this.state.pets &&
                this.state.extra
              ) {
                this.addData();
              } else {
                alert("Please fill all the details!");
              }
            }}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
