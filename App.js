import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import PostScreen from './src/screens/PostScreen';
import ChartScreen from './src/screens/ChartScreen';
import ChatScreen from './src/screens/ChatScreen';
import ProfileScreen from './src/screens/ProfileScreen.js';
import HomeScreen from './src/screens/HomeScreen.js';
import DcardDetailScreen from './src/screens/DcardDetailScreen.js';

const Tab = createMaterialBottomTabNavigator();
const PostStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const ChartStack = createNativeStackNavigator();
const ChatStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

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
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="home-outline" color={color} size={25} />
                            ),
                        }}>
                        {() => (
                            <HomeStack.Navigator>
                                <HomeStack.Screen
                                    name="Home"
                                    component={HomeScreen}
                                />
                            </HomeStack.Navigator>
                        )}
            </Tab.Screen>
            <Tab.Screen name="Post"
                        options={{
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
                        options={{
                            tabBarLabel: 'Chart',
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="chart-donut" color={color} size={25} />
                            ),
                        }}>
                        {() => (
                            <ChartStack.Navigator>
                                <ChartStack.Screen
                                    name="Chart"
                                    component={ChartScreen}
                                />
                            </ChartStack.Navigator>
                        )}
            </Tab.Screen>
            <Tab.Screen name="Chat"
                        options={{
                            tabBarLabel: 'Chat',
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="chat-processing-outline" color={color} size={25} />
                            ),
                            tabBarBadge: 3,
                        }}>
                {() => (
                    <ChatStack.Navigator>
                        <ChatStack.Screen
                            name="Chat"
                            component={ChatScreen}
                        />
                    </ChatStack.Navigator>
                )}
            </Tab.Screen>
            <Tab.Screen name="Profile"
                        options={{
                            tabBarLabel: 'Profile',
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name="account-outline" color={color} size={25} />
                            ),
                        }}>
                {() => (
                    <ProfileStack.Navigator>
                        <ProfileStack.Screen
                            name="Profile"
                            component={ProfileScreen}
                        />
                    </ProfileStack.Navigator>
                )}
            </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenTop: {
    height: 30
  },
});
