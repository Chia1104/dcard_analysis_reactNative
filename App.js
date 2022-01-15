import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import PostScreen from './src/screens/PostScreen';
import ChartScreen from './src/screens/ChartScreen';
import ChatScreen from './src/screens/ChatScreen';
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
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#000000"
            inactiveColor="#AAAAAA"
            barStyle={{ backgroundColor: '#ffffff' }}
            screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home"
                        component={HomeScreen}
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="home-outline" color={color} size={25} />
                            ),
                        }}/>
            <Tab.Screen name="Post" options={{
                tabBarLabel: 'Post',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="card-text-outline" color={color} size={25} />
                ),
            }}>
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
            <Tab.Screen name="Chart"
                        component={ChartScreen}
                        options={{
                            tabBarLabel: 'Chart',
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="chart-donut" color={color} size={25} />
                            ),
                        }}/>
            <Tab.Screen name="Chat"
                        component={ChatScreen}
                        options={{
                            tabBarLabel: 'Chat',
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="chat-processing-outline" color={color} size={25} />
                            ),
                        }}/>
            <Tab.Screen name="Profile"
                        component={SettingsScreen}
                        options={{
                            tabBarLabel: 'Profile',
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="account-outline" color={color} size={25} />
                            ),
                        }}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenTop: {
    height: 30
  },
});
