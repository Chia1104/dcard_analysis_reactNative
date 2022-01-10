import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import PostScreen from './src/screens/PostScreen';
import SettingsScreen from './src/screens/SettingsScreen.js';
import HomeScreen from './src/screens/HomeScreen.js';
import DcardDetailScreen from './src/screens/DcardDetailScreen.js';

const Tab = createMaterialBottomTabNavigator();
const PostStack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <View style={styles.screenTop}>
        </View>
        <Tab.Navigator>
          <Tab.Screen name="Post" >
              {() => (
                  <PostStack.Navigator>
                      <PostStack.Screen
                          name="Post"
                          component={PostScreen}
                      />
                      <PostStack.Screen name="Detail" component={DcardDetailScreen} />
                  </PostStack.Navigator>
              )}
          </Tab.Screen>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenTop: {
    height: 30
  },
});
