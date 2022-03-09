import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import db from '../Config';
export default class PlanDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: '',
      id: props.route.params.id,
    };
  }
  getData = async () => {
    var r = await db.collection('request').doc(this.state.id).get();
    console.log(r.data());
    this.setState({ info: r.data() });
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    var r = '';
    if (this.state.info.agentResponse) {
      r = this.state.info.agentResponse;
    } else {
      r = 'Response Pending';
    }
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
          source={require('../assets/bb.png')}>
          <ScrollView>
            <TouchableOpacity
              style={{
                borderRadius: 10,
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: '5%',
                marginTop: '15%',
                backgroundColor: 'rgba(20,20,20,0.5)',
              }}
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>

            <View
              style={{
                width: '90%',
                marginVertical: '15%', 
                padding: 10,
                alignSelf: 'center',
                borderRadius: 10,
                backgroundColor: 'rgba(20,20,20,0.5)',
                flex: 1,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  marginHorizontal: '5%',
                  alignSelf: 'center',
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Your Custom Plan Details
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: '5%',
                  marginTop: 10,
                }}>
                <Text
                  style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
                  Your Budget:{' '}
                </Text>
                <Text
                  style={{ marginLeft: '5%', fontSize: 15, color: 'white' }}>
                  {this.state.info.budget}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: '5%',
                  marginTop: 10,
                }}>
                <Text
                  style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
                  Start Date:
                </Text>
                <Text
                  style={{ marginLeft: '5%', fontSize: 15, color: 'white' }}>
                  {this.state.info.date}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: '5%',
                  marginTop: 10,
                }}>
                <Text
                  style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
                  End Date:
                </Text>
                <Text
                  style={{ marginLeft: '5%', fontSize: 15, color: 'white' }}>
                  {this.state.info.endDate}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: '5%',
                  marginTop: 10,
                }}>
                <Text
                  style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
                  Plan Type:
                </Text>
                <Text
                  style={{ marginLeft: '5%', fontSize: 15, color: 'white' }}>
                  {this.state.info.planType}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: '5%',
                  marginTop: 10,
                }}>
                <Text
                  style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
                  Food Type:
                </Text>
                <Text
                  style={{ marginLeft: '5%', fontSize: 15, color: 'white' }}>
                  {this.state.info.foodType}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: '5%',
                  marginTop: 10,
                }}>
                <Text
                  style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
                  Number of People:
                </Text>
                <Text
                  style={{ marginLeft: '5%', fontSize: 15, color: 'white' }}>
                  {this.state.info.np}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: '5%',
                  marginTop: 10,
                }}>
                <Text
                  style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
                  Number of kids:
                </Text>
                <Text
                  style={{ marginLeft: '5%', fontSize: 15, color: 'white' }}>
                  {this.state.info.kids}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: '5%',
                  marginTop: 10,
                }}>
                <Text
                  style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
                  Open to Pets:
                </Text>
                <Text
                  style={{ marginLeft: '5%', fontSize: 15, color: 'white' }}>
                  {this.state.info.pets}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: '5%',
                  marginTop: 10,
                }}>
                <Text
                  style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
                  Open to Adventure Sports:
                </Text>
                <Text
                  style={{ marginLeft: '5%', fontSize: 15, color: 'white' }}>
                  {this.state.info.adventure}
                </Text>
              </View>

              <View
                style={{
                  marginHorizontal: '5%',
                  marginTop: 10,
                }}>
                <Text
                  style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
                  Extra Information:
                </Text>
                <Text style={{ fontSize: 15, color: 'white' }}>
                  {this.state.info.extra}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#fef9e7',
                  width: '90%',
                  paddingHorizontal: '10%',
                  borderRadius: 10,
                  marginTop: 30,
                  alignSelf: 'center',
                  padding: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                    Agent Name:
                  </Text>
                  <Text style={{ marginLeft: '5%', fontSize: 15 }}>
                    {this.state.info.agentName}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                    Agent Email:
                  </Text>
                  <Text style={{ marginLeft: '5%', fontSize: 15 }}>
                    {this.state.info.agentEmail}
                  </Text>
                </View>

                <View
                  style={{
                    marginTop: 10,
                  }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                    Agent Response:
                  </Text>
                  <Text style={{ fontSize: 15 }}>
                   {r}
                  </Text>
                </View> 
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
