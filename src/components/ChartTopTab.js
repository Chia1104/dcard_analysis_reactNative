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
                tabBarItemStyle: { width: 100 },
                tabBarStyle: { backgroundColor: 'powderblue' },
            }}
        >
            <TopTab.Screen name="PieChart" component={MorePieChartScreen} />
            <TopTab.Screen name="BLChart" component={MoreBLChartScreen} />
        </TopTab.Navigator>
    );
}

export default ChartTopTab;
