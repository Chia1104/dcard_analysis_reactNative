import React from 'react';
import {Button, StyleSheet, View, useColorScheme} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {Portal, Provider} from "react-native-paper";

import HomeScreen from "../screens/HomeScreen";
import PostScreen from "../screens/PostScreen";
import DcardDetailScreen from "../screens/DcardDetailScreen";
import SearchScreen from "../screens/SearchScreen";
import ChartScreen from "../screens/ChartScreen";
import ChatScreen from "../screens/ChatScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createMaterialBottomTabNavigator();
const PostStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const ChartStack = createNativeStackNavigator();
const ChatStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

const MainNavTab = () => {
    const colorScheme = useColorScheme();

    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeActiveColor = colorScheme === 'light' ? "black" : "white";
    const themeContainerStyle =
        colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                activeColor={themeActiveColor}
                inactiveColor="#AAAAAA"
                barStyle={themeContainerStyle}
                screenOptions={{ headerShown: false }}>
                <Tab.Screen
                    name="homeTab"
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home-outline" color={color} size={25} />
                        ),
                    }}>
                    {() => (
                        <HomeStack.Navigator>
                            <HomeStack.Screen
                                name="homeStack"
                                component={HomeScreen}
                                options={{
                                    title: 'Home',
                                    headerStyle: {themeContainerStyle},
                                    headerTintColor: {themeActiveColor},
                                    headerTitleStyle: {
                                        fontWeight: 'bold',
                                    },
                                }}
                            />
                        </HomeStack.Navigator>
                    )}
                </Tab.Screen>
                <Tab.Screen
                    name="postTab"
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
                                options={({navigation}) => ({
                                    headerRight: () =>
                                        <Button
                                            onPress={() => navigation.navigate('Search')}
                                            title="Search"
                                            color="black"
                                            icon="magnify"
                                        />
                                })}
                            />
                            <PostStack.Screen name="Detail" component={DcardDetailScreen} />
                            <PostStack.Screen name="Search" component={SearchScreen} />
                        </PostStack.Navigator>
                    )}
                </Tab.Screen>
                <Tab.Screen
                    name="chartTab"
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
                <Tab.Screen
                    name="chatTab"
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
                <Tab.Screen
                    name="profileTab"
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
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lightContainer: {
        backgroundColor: 'white',
    },
    darkContainer: {
        backgroundColor: 'black',
    },
    lightThemeText: {
        color: 'black',
    },
    darkThemeText: {
        color: 'white',
    },
});

export default MainNavTab;
