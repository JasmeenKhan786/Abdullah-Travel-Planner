import * as React from 'react';
import {
  Text,
  View,
 
  ImageBackground,
  ScrollView,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import db from '../Config';

export default class Atraction extends React.Component {
  getdata = async () => {
    var r = await db.collection('attraction').get();
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
      <View style={{ flex: 1, backgroundColor: '#fef9e7' }}>
        <ScrollView>
          <Text
            style={{
              marginTop: '10%',
              fontSize: 24,
              fontWeight: 'bold',
              marginLeft: '5%',
            }}>
            Explore
          </Text>
          <Text style={{ marginTop: 20, fontSize: 16, marginHorizontal: '5%' }}>
            Live with no excuses and travel with no regrets - Oscar Wild
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
              alignItems: 'center',
              marginHorizontal: '5%',
            }}>
            <Text
              style={{ fontSize: 16, color: '#a44a2a', fontWeight: 'bold' }}>
              Experiences
            </Text>
            <Text
              style={{ fontSize: 16, color: '#a44a2a', fontWeight: 'bold' }}>
              .
            </Text>
            <Text
              style={{ fontSize: 16, color: '#a44a2a', fontWeight: 'bold' }}>
              Adventures
            </Text>
            <Text
              style={{ fontSize: 16, color: '#a44a2a', fontWeight: 'bold' }}>
              .
            </Text>
            <Text
              style={{ fontSize: 16, color: '#a44a2a', fontWeight: 'bold' }}>
              Tour
            </Text>
          </View>

          <ScrollView horizontal={true}>
            {this.state.atraction.map((a,i) => { 
              return (
                <ImageBackground
                key={i}
                  source={{ uri: a.image }}
                  style={{
                    width: 250,
                    height: 500,
                    marginHorizontal: 20,
                    borderRadius: 10,
                    marginVertical: 30,
                    overflow: 'hidden',
                    justifyContent: 'flex-end',
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      marginLeft: 10,
                      color: 'white',
                      fontWeight: 'bold',
                    }}>
                    {a.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      marginLeft: 10,
                      color: 'white',
                      marginTop: 10,
                    }}>
                    {a.description}
                  </Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginLeft: 10,
                      marginVertical: 10,
                    }}>
                    <Entypo name="location-pin" size={18} color="white" />
                    <Text
                      style={{ fontSize: 14, marginLeft: 5, color: 'white' }}>
                      Saudi Arabia
                    </Text>
                  </View>
                </ImageBackground>
              );
            })}
          </ScrollView>
        </ScrollView>
      </View>
    );
  }
}
