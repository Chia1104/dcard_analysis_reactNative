import React from "react";
import { SafeAreaView, FlatList, View, Text, StyleSheet, useColorScheme } from "react-native";
import {VictoryPie, VictoryChart, VictoryTheme} from "victory-native";

const HomePieChart = () => {
    const colorScheme = useColorScheme();
    const themeTextColor = colorScheme === 'light' ? "black" : "white";
    return (
        <VictoryPie
            data={[
                { x: "Positive", y: 13 },
                { x: "Neutral", y: 7 },
                { x: "Negative", y: 55 }
            ]}
            colorScale={["#00DDAA", "#FFDD55", "#FFA488"]}
            // animate={{
            //     duration: 2000
            // }}
            labels={({ datum }) => datum.y}
            innerRadius={100}
            style={{ labels: { fill: themeTextColor, fontSize: 20, fontWeight: "bold" } }}
        />
    );
};

export default HomePieChart;
