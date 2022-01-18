import React from "react";
import { SafeAreaView, FlatList, View, Text, StyleSheet } from "react-native";
import {VictoryPie, VictoryChart, VictoryTheme} from "victory-native";

const HomePieChart = () => {
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
        />
    );
};

export default HomePieChart;
