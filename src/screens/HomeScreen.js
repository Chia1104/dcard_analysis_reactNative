import React from "react";
import { SafeAreaView, FlatList, View, Text, StyleSheet, ScrollView } from "react-native";

import HomeGBChart from "../components/HomeGBChart";
import HomePieChart from "../components/HomePieChart";

const HomeScreen = () => {

    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const m = new Date();
    let name = month[m.getMonth()];
    const d = new Date();
    let day = d.getDate();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.titleBackgroundStyle}>
                    <Text style={styles.monthStyle}>
                        {day}, {name}
                    </Text>
                </View>
                <View>

                </View>
                <View style={styles.chartBackgroundStyle}>
                    <HomePieChart />
                </View>
                <View style={styles.chartBackgroundStyle}>
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
    }
});

export default HomeScreen;
