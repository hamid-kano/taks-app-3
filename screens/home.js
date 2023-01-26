import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import Webview from '../components/webview';
import Header from '../components/header';
// or any pure javascript modules available in npm

import Constants from 'expo-constants';


export default function Home({ route, navigation }) {
  const { user_id, active, full_name, url } = route.params ?? 'no';
  const isLogin = active != 0 && active != 1 ? false : true;
  const [Loading, setLoading] = useState(false);

  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 3);

  async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    // console.log(result);
    if (result) {
      // console.log(' == ' + result);
      if (key == 'user_id') {
        set_user_id(parseInt(result));
        set_isLogin(true);
        // console.log(_user_id);
        // console.log(_isLogin);
        //alert(_user_id);
      } else if (key == 'url') {
        set_url(result);
        // console.log(_url);
        //alert(_url);
      } else if (key == 'active') {
        set_active(result);
        // console.log(_active);
        //alert(_active);
      } else if (key == 'full_name') {
        set_full_name(result);
        // console.log(_active);
        //alert(_active);
      }
    }
  }

  getValueFor('user_id');
  getValueFor('url');
  getValueFor('active');
  getValueFor('full_name');

  return (
    <View style={styles.container}>
      <Header navigation= {navigation} />
      <Webview
        name="test home page"
        eturl="https://www.p-weather.ps/api/index.php"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});