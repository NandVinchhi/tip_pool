import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Splash from './screens/splash';
import SplashE from './screens/employee/splash';
import SplashM from './screens/manager.js/splash';
import SignupE from './screens/employee/signup';
import LoginE from './screens/employee/login';
import Involved from './screens/employee/involved';
import EQRCode from './screens/employee/qr';
import Jar from './screens/employee/jar';
import Request from './screens/employee/request';
import Loans from './screens/employee/loans';
import Vote from './screens/employee/vote';
import Rate from './screens/manager.js/rate';



const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name="Splash" 
        component={Splash} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="SplashE" 
        component={SplashE} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="SplashM" 
        component={SplashM} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="SignupE" 
        component={SignupE} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="LoginE" 
        component={LoginE} 
        options={{ headerShown: false}} 
      />
       <Stack.Screen 
        name="Involved" 
        component={Involved} 
        options={{ headerShown: false}} 
      />
       <Stack.Screen 
        name="EQRCode" 
        component={EQRCode} 
        options={{ headerShown: false}} 
      />
       <Stack.Screen 
        name="Jar" 
        component={Jar} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Request" 
        component={Request} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Loans" 
        component={Loans} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Vote" 
        component={Vote} 
        options={{ headerShown: false}} 
      />
       <Stack.Screen 
        name="Rate" 
        component={Rate} 
        options={{ headerShown: false}} 
      />
     
     
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}