import React from 'react';
import {StyleSheet, View, useColorScheme} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {IconButton } from "react-native-paper";

import HomeScreen from "../screens/HomeScreen";
import PostScreen from "../screens/PostScreen";
import DcardDetailScreen from "../screens/DcardDetailScreen";
import SearchScreen from "../screens/SearchScreen";
import ChatScreen from "../screens/ChatScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ChartTopTab from "./ChartTopTab";
import {useDispatch, useSelector} from "react-redux";
import {expandBottomSheet} from "../redux/actions/BottomSheetAction";

const BottomTab = createMaterialBottomTabNavigator();
const PostStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const ChartStack = createNativeStackNavigator();
const ChatStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

const MainNavTab = () => {
    const colorScheme = useColorScheme();
    const dispatch = useDispatch();

    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeTextColor = colorScheme === 'light' ? "black" : "white";
    const themeContainerStyle =
        colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
    const themeContainerStyle2 =
        colorScheme === 'light' ? styles.lightContainer2 : styles.darkContainer2;
    const themeItemContainerStyle =
        colorScheme === 'light' ? styles.lightContainer : styles.darkItemContainer;
    const themeContainerColor = colorScheme === 'light' ? "white" : "black";

    return (
        <NavigationContainer>
            <BottomTab.Navigator
                initialRouteName="Home"
                activeColor={themeTextColor}
                inactiveColor="#AAAAAA"
                barStyle={themeContainerStyle}
                screenOptions={{ headerShown: false }}>
                <BottomTab.Screen
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
                                    headerStyle: {
                                        backgroundColor: {themeContainerColor}
                                    },
                                    headerTintColor: {themeTextColor},
                                    headerTitleStyle: {
                                        fontWeight: 'bold',
                                    },
                                    headerTransparent: 'true',
                                    headerTitleAlign: 'center',
                                }}
                            />
                        </HomeStack.Navigator>
                    )}
                </BottomTab.Screen>
                <BottomTab.Screen
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
                                name="postStack"
                                component={PostScreen}
                                options={
                                ({navigation}) => ({
                                    headerRight: () =>
                                        <IconButton
                                            onPress={() => navigation.push('searchStack')}
                                            color={themeTextColor}
                                            icon="magnify"
                                        />,
                                    title: 'Post',
                                    headerStyle: {
                                        backgroundColor: {themeContainerColor}
                                    },
                                    headerTintColor: {themeTextColor},
                                    headerTitleStyle: {
                                        fontWeight: 'bold',
                                    },
                                    headerTransparent: 'true',
                                    headerTitleAlign: 'center',
                                })}
                            />
                            <PostStack.Screen
                                name="detailStack"
                                component={DcardDetailScreen}
                                options={{
                                    title: 'Detail',
                                    headerStyle: {
                                        backgroundColor: {themeContainerColor}
                                    },
                                    headerTintColor: {themeTextColor},
                                    headerTitleStyle: {
                                        fontWeight: 'bold',
                                    },
                                    headerTransparent: 'true',
                                    headerTitleAlign: 'center',
                                }}/>
                            <PostStack.Screen
                                name="searchStack"
                                component={SearchScreen} options={{
                                title: 'Search',
                                headerStyle: {
                                    backgroundColor: {themeContainerColor}
                                },
                                headerTintColor: {themeTextColor},
                                headerTitleStyle: {
                                    fontWeight: 'bold',
                                },
                                headerTransparent: 'true',
                                headerTitleAlign: 'center',
                            }}/>
                        </PostStack.Navigator>
                    )}
                </BottomTab.Screen>
                <BottomTab.Screen
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
                                name="chartStack"
                                component={ChartTopTab}
                                options={{
                                    title: 'Chart',
                                    headerStyle: {
                                        backgroundColor: {themeContainerColor}
                                    },
                                    headerTintColor: {themeTextColor},
                                    headerTitleStyle: {
                                        fontWeight: 'bold',
                                    },
                                    headerTransparent: 'true',
                                    headerTitleAlign: 'center',
                                }}
                            />
                        </ChartStack.Navigator>
                    )}
                </BottomTab.Screen>
                <BottomTab.Screen
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
                                name="chatStack"
                                component={ChatScreen}
                                options={{
                                    title: 'Chat',
                                    headerStyle: {
                                        backgroundColor: {themeContainerColor}
                                    },
                                    headerTintColor: {themeTextColor},
                                    headerTitleStyle: {
                                        fontWeight: 'bold',
                                    },
                                    headerTransparent: 'true',
                                    headerTitleAlign: 'center',
                                }}
                            />
                        </ChatStack.Navigator>
                    )}
                </BottomTab.Screen>
                <BottomTab.Screen
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
                                name="profileStack"
                                component={ProfileScreen}
                                options={
                                    () => ({
                                        headerRight: () =>
                                            <IconButton
                                                onPress={() => {
                                                    dispatch(expandBottomSheet);
                                                }}
                                                color={themeTextColor}
                                                icon="cog-outline"
                                            />,
                                        title: 'Profile',
                                        headerStyle: {
                                            backgroundColor: {themeContainerColor}
                                        },
                                        headerTintColor: {themeTextColor},
                                        headerTitleStyle: {
                                            fontWeight: 'bold',
                                        },
                                        headerTransparent: 'true',
                                        headerTitleAlign: 'center',
                                    })}
                            />
                        </ProfileStack.Navigator>
                    )}
                </BottomTab.Screen>
            </BottomTab.Navigator>
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
    lightContainer2: {
        backgroundColor: '#F5F5F5',
    },
    darkContainer2: {
        backgroundColor: '#1f1f1f',
    },
    darkItemContainer: {
        backgroundColor: '#262626',
    },
    lightThemeText: {
        color: 'black',
    },
    darkThemeText: {
        color: 'white',
    },
});

export default MainNavTab;
