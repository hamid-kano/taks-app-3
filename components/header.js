import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Constants from 'expo-constants';

const { width, height } = Dimensions.get('window');

export default function Header(props) {
  const [menu, set_menu] = React.useState(true);
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 110,
          backgroundColor: '#FFFFFF',
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '85%',
          }}>
          <Image
            style={{
              width: 75,
              height: 75,
              // position: 'absolute',
              // left: '50%',
              // resizeMode: 'stretch',
            }}
            source={require('../assets/logo-header.png')}
          />
          <Text
            style={{
              width: 80,
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#FBAF3C',
            }}>
            طقس الوطن
          </Text>
        </View>
        <Ionicons
          onPress={() => {
            set_menu(!menu);
          }}
          name={menu ? 'menu' : 'close'}
          size={48}
          color="#2687C8"
          style={{ width: '15%' }}
        />
      </View>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ justifyContent: 'center', backgroundColor: '#ebeef0' }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Home');
          }}
          style={styles.btn}>
          <Text style={styles.btnText}>الرئيسية</Text>
          <Image
            style={{
              width: 25,
              height: 25,
              marginHorizontal: 5,
            }}
            source={require('../assets/logo-header.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Article');
          }}
          style={styles.btn}>
          <Text style={styles.btnText}>المقالات</Text>
          <Image
            style={{
              width: 25,
              height: 25,
              marginHorizontal: 5,
            }}
            source={require('../assets/article_blue.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Wear');
          }}
          style={styles.btn}>
          <Text style={styles.btnText}>شو نلبس بكرى</Text>
          <Image
            style={{
              width: 25,
              height: 25,
              marginHorizontal:5
            }}
            source={require('../assets/weare_blue.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Favorite');
          }}
          style={styles.btn}>
          <Text style={styles.btnText}>المفضلة</Text>
          <Image
            style={{
              width: 25,
              height: 25,
              marginHorizontal:5
            }}
            source={require('../assets/favorite_blue.png')}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    // borderBottomLeftRadius: 18,
    // borderTopLeftRadius: 18,
    marginTop: 10,
    marginBottom: 10,
    height: 40,
    paddingHorizontal: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 1,
  },
  btnText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#2c7be5',
  },
});
