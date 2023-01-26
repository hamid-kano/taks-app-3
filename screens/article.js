import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  ImageBackground,
  RefreshControl,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  FlatList,
  Item,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import * as SplashScreen from 'expo-splash-screen';
import Header from '../components/header';

const { width, height } = Dimensions.get('window');

export default function Article({ route, navigation }) {
  const { user_id, active, full_name, url } = route.params ?? 'no';
  const isLogin = active != 0 && active != 1 ? false : true;
  const [Loading, setLoading] = useState(false);
  const [date, setdate] = useState([]);
  const [selectedId, setselectedId] = useState(-1);

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
  const onRefresh = React.useCallback(() => {
    setLoading(true);
    axios
      .get(
        'https://www.p-weather.ps/api/article.php?article&first_number=0&last_number=5'
      )
      .then(function (response) {
        // handle response
        //alert(response["data"]);
        setdate(response['data']);
        // console.log(response['data']);
        setLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executes at the last of any API call
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // console.log('start');
    setLoading(true);
    axios
      .get(
        'https://www.p-weather.ps/api/article.php?article&first_number=0&last_number=5'
      )
      .then(function (response) {
        // handle response
        //alert(response["data"]);
        setdate(response['data']);
        // console.log(response['data']);
        setLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executes at the last of any API call
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View>
        <Image
          style={{
            height: height * 0.75 * 0.35 - 10,
            // borderRadius: 13,
            // borderBottomLeftRadius: 25,
            // borderBottomRightRadius: 25,
            resizeMode: 'cover',
          }}
          source={{
            uri: 'https://www.p-weather.ps/photo/article/1671433852361.jpg',
          }}
        />
      </View>
      <FlatList
        data={date}
        // numColumns={2}
        keyExtractor={({ id }, index) => id}
        style={{ marginTop: 10 }}
        renderItem={({ item }) => (
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '900',
                // paddingRight: 15,
                color: '#2687C8',
                textAlign: 'right',
                bottom: 0,
                left: 0,
                width: '100%',
                fontFamily: 'Cairo',
              }}>
              {item.title}
            </Text>
            <View
              style={{
                // باقس 70% نقسم على 3 أقسام
                height: height * 0.75 * 0.35,
                flex: 1,
                padding: 1,
                marginBottom: 5,
                marginLeft: 5,
              }}>
              <View>
                <Image
                  style={{
                    height: height * 0.75 * 0.25 - 10,
                    borderRadius: 13,
                    marginVertical: 15,
                    // borderBottomLeftRadius: 25,
                    // borderBottomRightRadius: 25,
                    resizeMode: 'cover',
                  }}
                  source={{
                    uri:
                      'https://www.p-weather.ps/photo/article/' +
                      item.featured_image,
                  }}
                />
              </View>
            </View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '400',
                // paddingRight: 15,
                color: '#2687C8',
                textAlign: 'right',
                bottom: 0,
                left: 0,
                width: '100%',
                fontFamily: 'Cairo',
              }}>
              {item.body.substr(0, 150) + '.... أقراء المزيد'}
            </Text>
          </View>
        )}
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
