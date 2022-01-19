import React from "react";
import { SafeAreaView, FlatList, View, Text, StyleSheet, ScrollView, useColorScheme } from "react-native";

import HomeGBChart from "../components/HomeGBChart";
import HomePieChart from "../components/HomePieChart";

const HomeScreen = () => {

    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const m = new Date();
    let name = month[m.getMonth()];
    const d = new Date();
    let day = d.getDate();

    const colorScheme = useColorScheme();

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
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={[themeContainerStyle2]}>
                <View style={styles.titleBackgroundStyle}>
                    <Text style={[styles.monthStyle, themeTextStyle]}>
                        {day}, {name}
                    </Text>
                </View>
                <View>

                </View>
                <View style={[styles.chartBackgroundStyle, themeItemContainerStyle]}>
                    <HomePieChart />
                </View>
                <View style={[styles.chartBackgroundStyle, themeItemContainerStyle]}>
                    <HomeGBChart />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    titleBackgroundStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        margin: 20
    },
    monthStyle: {
        fontSize: 45
    },
    chartBackgroundStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        margin: 20,
        borderRadius: 20
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

export default HomeScreen;
