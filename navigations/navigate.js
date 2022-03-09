import React from 'react';
import AddPlan from '../Screens/addPlan';
import Agent from '../Screens/agent';
import Atraction from '../Screens/atraction';
import Customs from '../Screens/customplan';
import ForgotPassword from '../Screens/forgotPassword';
import HomeScreen from '../Screens/HomeScreen';
import Loading from '../Screens/loading';
import Login from '../Screens/loginScreen';
import PlanDetails from '../Screens/plandetail';
import Signup from '../Screens/signup';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

function PlanerStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Agent" component={Agent} />
      <Stack.Screen name="Customs" component={Customs} />
      <Stack.Screen name="AddPlan" component={AddPlan} />
      <Stack.Screen name="PlanDetails" component={PlanDetails} />
    </Stack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

function PlanerTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeScreen') {
            return<Ionicons name="md-home" size={24} color={color} />
          } else if (route.name === 'Atraction') {
            return<Ionicons name="ios-map" size={24} color={color} />
          }

          
        },
        tabBarActiveTintColor: '#e7a977',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="HomeScreen"
        component={PlanerStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Atraction" component={Atraction}   options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}
const Stack1 = createStackNavigator();

function MainStack() {
  return (
    <Stack1.Navigator>
      <Stack1.Screen
        name="Loading"
        component={Loading}
        options={{ headerShown: false }}
      />
      <Stack1.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack1.Screen
        name="HomeScreen"
        component={PlanerTabs}
        options={{ headerShown: false }}
      />
      <Stack1.Screen 
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack1.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: true, headerTintColor: 'white',
        headerStyle: { backgroundColor: 'rgba(206,141,110,1)' },}}
      />
    </Stack1.Navigator>
  );
}
export default MainStack;
