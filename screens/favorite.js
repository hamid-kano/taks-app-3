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
import Header from '../components/header';

const { width, height } = Dimensions.get('window');

export default function Favorite({ route, navigation }) {
  const [Loading, setLoading] = useState(true);
  const [data, setdata] = useState([]);

  const onRefresh = React.useCallback(() => {
    setLoading(true);
    axios
      .get('https://www.p-weather.ps/api/article.php?weather')
      .then(function (response) {
        // handle response
        //alert(response["data"]);
        setdata(response['data']);
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
      .get('https://www.p-weather.ps/api/article.php?weather')
      .then(function (response) {
        // handle response
        //alert(response["data"]);

        setdata(response['data']);
        console.log(response['data']);
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});

//  return (
//     <View style={styles.container}>
//       {!Loading && (
//         <View
//           style={{
//             display: 'flex',
//             justifyContent: 'center',
//             flexDirection: 'row',
//           }}>
//           <View
//             style={{
//               width: '90%',
//               backgroundColor: 'white',
//               borderRadius: 15,
//               padding: 10,
//             }}>
//             <View
//               style={{ width: '100%', backgroundColor: 'blue', height: 50 }}>
//               <Text
//                 style={{
//                   fontSize: 18,
//                   fontWeight: '900',
//                   paddingRight: 15,
//                   color: '#2687C8',
//                   textAlign: 'right',
//                   bottom: 0,
//                   left: 0,
//                   width: '100%',
//                 }}>
//                 // {console.log('dddd' + data[0]['name'])}
//               </Text>
//             </View>
//             <View>
//               <View>
//                 <Text>{data[0]['date']}</Text>
//                 <Text>{data[0]['weather_type']}</Text>
//                 <Text>{data[0]['temp_day']}</Text>
//                 <Text>{data[0]['weather_type']}</Text>
//               </View>
//               <View>
//                 <Text>{data[0]['date']}</Text>
//                 <Text>{data[0]['weather_type']}</Text>
//                 <Text>{data[0]['temp_day']}</Text>
//                 <Text>{data[0]['weather_type']}</Text>
//               </View>
//               <View>
//                 <Text>{data[0]['date']}</Text>
//                 <Text>{data[0]['weather_type']}</Text>
//                 <Text>{data[0]['temp_day']}</Text>
//                 <Text>{data[0]['weather_type']}</Text>
//               </View>
//             </View>
//             <View>
//               <View>
//                 <Text>{data[0]['date']}</Text>
//                 <Text>{data[0]['weather_type']}</Text>
//                 <Text>{data[0]['temp_day']}</Text>
//                 <Text>{data[0]['weather_type']}</Text>
//               </View>
//               <View>
//                 <Text>{data[0]['date']}</Text>
//                 <Text>{data[0]['weather_type']}</Text>
//                 <Text>{data[0]['temp_day']}</Text>
//                 <Text>{data[0]['weather_type']}</Text>
//               </View>
//               <View>
//                 <Text>{data[0]['date']}</Text>
//                 <Text>{data[0]['weather_type']}</Text>
//                 <Text>{data[0]['temp_day']}</Text>
//                 <Text>{data[0]['weather_type']}</Text>
//               </View>
//             </View>
//           </View>
//         </View>
//       )}
//     </View>
//   );
