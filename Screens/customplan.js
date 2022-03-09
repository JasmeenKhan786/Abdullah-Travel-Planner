import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
 
  ScrollView,
} from 'react-native';
import db from '../Config';
import firebase from 'firebase';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { EvilIcons } from '@expo/vector-icons';

export default class Customs extends Component {
  getdata = async () => {
    this.setState({request:[]})
    var r = await db
      .collection('request')
      .where('agentEmail', '==', this.state.agentEmail).where('userEmail','==',firebase.auth().currentUser.email)
      .get();
    r.docs.map((e) => {
      var temp = this.state.request; 
      var data = e.data();
      data.id = e.id;
      temp.push(data);
      this.setState({ request: temp });
    });
  };
  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
     this.getdata()
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  constructor(props) {
    super(props);
    this.state = {
      agentName: props.route.params.agentName,
      agentEmail: props.route.params.agentEmail,
      request: [],
    };
  }
  render() {
    if (this.state.request.length === 0) {
      return (
        <View style={{ flex: 1, backgroundColor: '#fef9e7' }}>
         
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
                  Your Plans
                </Text>
                <Text></Text>
              </View>

              <Text
                style={{ 
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "black",
                  alignSelf: "center",
                  textAlign: "center",
                  marginHorizontal:'5%',
                  marginTop:'50%'
                }}
              >
                Your Plans will appear here! Not any? Add one!
              </Text>

              <TouchableOpacity
            style={{
              backgroundColor: 'rgba(206,141,110,1)',
              width: '60%',
              height: 40,
              marginTop: 15,
              borderRadius: 10,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              this.props.navigation.navigate('AddPlan', {
                agentEmail: this.state.agentEmail,
                agentName: this.state.agentName,
              });
            }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
              + Add Plan
            </Text>
          </TouchableOpacity>
            </ScrollView>
          
        </View>
      );
    } else {
    
    return (
      <View style={{ flex: 1, backgroundColor: '#fef9e7' }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%',
            paddingTop: '10%',
            backgroundColor: 'rgba(206,141,110,1)',
            paddingBottom: 5,
          }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>
            Your Plans
          </Text>
          <Text></Text>
        </View>

        <ScrollView>
          {this.state.request.map((a) => {
            return (
              <TouchableOpacity
              key={a.id}
                onPress={() => {
                  this.props.navigation.navigate('PlanDetails', { id: a.id });
                }}>
                <View
                  style={{
                    width: '90%',
                    backgroundColor: '#ccc',
                    alignSelf: 'center',
                    marginTop: 20,
                    borderRadius: 10,
                  }}>
                  <LinearGradient
                    colors={['#e7a977', '#ebbe9b']}
                    style={{
                      flex: 1,
                      width: '100%',
                      height: '100%',
                      padding: 15,
                      borderRadius: 10,
                    }}>
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <Text style={{fontWeight:'bold', fontSize:18}}>Plan Type: {a.planType}</Text>
                   
                    <Text style={{backgroundColor:'white', padding:10, borderRadius:10, color:'grey'}}>{a.budget} $</Text>
                    </View>
                    <Text style={{fontSize:16}}>People: {a.np}</Text>


                    <View style={{flexDirection:'row', alignItems:'center', marginTop:10}}>
                    <EvilIcons name="calendar" size={24} color="black" />
                    <Text>{a.date} - {a.endDate}</Text>
                    </View>

                  </LinearGradient>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(206,141,110,1)',
              width: '60%',
              height: 40,
              marginVertical: 15,
              borderRadius: 10,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => { 
              this.props.navigation.navigate('AddPlan', {
                agentEmail: this.state.agentEmail,
                agentName: this.state.agentName,
              });
            }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
              + Add Plan
            </Text>
          </TouchableOpacity>
      </View>
    );
          }
  }
}
