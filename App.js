import React, { useEffect, useState } from 'react';
import { I18nManager, Text, View, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useFonts } from 'expo-font';
import Home from './screens/home';
import Article from './screens/article';
import Wear from './screens/wear';
import Favorite from './screens/favorite';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false, title: 'الرئيسية' }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false, title: 'شو نلبس بكرى' }}
          name="Wear"
          component={Wear}
        />
        <Stack.Screen
          options={{ headerShown: false, title: 'المقالات' }}
          name="Article"
          component={Article}
        />
        <Stack.Screen
          options={{ headerShown: false, title: 'المفضلة' }}
          name="Favorite"
          component={Favorite}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
