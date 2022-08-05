
import React, {Component,useState, useEffect} from 'react';
import { Text, StatusBar ,PermissionsAndroid, Platform} from 'react-native';
import Router from './src/navigation/Root';

import { withAuthenticator } from 'aws-amplify-react-native'

import * as Location from 'expo-location'

import 'react-native-gesture-handler';

import Amplify from 'aws-amplify'
import config from './src/aws-exports'
// Amplify.configure(config)

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
})

// IOS
// navigator.geolocation = require('@react-native-community/geolocation');
// import Geolocation from '@react-native-community/geolocation';

function App() {

  // const androidPermission = async () =>{
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //       {
  //         title: "Car App Location Permission",
  //         message:
  //           "Car App needs access to your location " +
  //           "so you can take awesome rides.",
  //         buttonNeutral: "Ask Me Later",
  //         buttonNegative: "Cancel",
  //         buttonPositive: "OK"
  //       }
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log("You can use the location");
  //     } else {
  //       console.log("location permission denied");
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // }
  // useEffect(() => {
  //   if(Platform.OS === 'android'){
  //     androidPermission();
  //     Location.installWebGeolocationPolyfill()
  //     navigator.geolocation.getCurrentPosition(setPosition);
  //   }
  //   // IOS 
  //   // else{
  //   //   Geolocation.requestAuthorization();
  //   // }
    
  // }, [])

  const [location, setLocation] = useState();
  const [errorMsg, setErrorMsg] = useState();

  Location.setGoogleApiKey('AIzaSyANGSOL_nSwnya7MkaDkO1omYjmt7WthYo')
  Location.installWebGeolocationPolyfill();

  useEffect(() => {
    (async () => {
      let { status } = await Location.getForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <SearchScreen /> */}
      <Router />

    </>
  );
}

export default withAuthenticator(App);
