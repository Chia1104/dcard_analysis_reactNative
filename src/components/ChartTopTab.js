import React from "react";
import { SafeAreaView, FlatList, View, Text, StyleSheet, useColorScheme } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MorePieChartScreen from "../screens/MorePieChrtScreen";
import MoreBLChartScreen from "../screens/MoreBLChartScreen";

const TopTab = createMaterialTopTabNavigator();

const ChartTopTab = () => {
    return (
        <TopTab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 12 },
                // tabBarItemStyle: {
                //     width: 100,
                // },
                tabBarStyle: {
                    backgroundColor: 'powderblue',
                },
            }}
        >
            <TopTab.Screen name="PieChart" component={MorePieChartScreen} options={{ tabBarLabel: '情緒總量' }}/>
            <TopTab.Screen name="BLChart" component={MoreBLChartScreen} options={{ tabBarLabel: '情緒趨勢' }}/>
        </TopTab.Navigator>
    );
}

export default ChartTopTab;
