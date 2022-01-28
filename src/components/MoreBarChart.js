import React from "react";
import { StyleSheet, Text, View, useColorScheme} from "react-native";
import { VictoryBar, VictoryChart, VictoryStack, VictoryAxis } from "victory-native";

const MoreBarChart = () => {
    const myDataset = [
        [
            { x: "a", y: 1 },
            { x: "b", y: 2 },
            { x: "c", y: 3 },
            { x: "d", y: 2 },
            { x: "e", y: 1 },
            { x: "f", y: 1 },
            { x: "g", y: 1 },
            { x: "h", y: 1 },
            { x: "i", y: 1 },
            { x: "j", y: 1 },
            { x: "k", y: 1 },
            { x: "l", y: 1 },
        ],
        [
            { x: "a", y: 1 },
            { x: "b", y: 2 },
            { x: "c", y: 3 },
            { x: "d", y: 2 },
            { x: "e", y: 1 },
            { x: "f", y: 1 },
            { x: "g", y: 1 },
            { x: "h", y: 1 },
            { x: "i", y: 1 },
            { x: "j", y: 1 },
            { x: "k", y: 1 },
            { x: "l", y: 1 },
        ],
        [
            { x: "a", y: 1 },
            { x: "b", y: 2 },
            { x: "c", y: 3 },
            { x: "d", y: 2 },
            { x: "e", y: 1 },
            { x: "f", y: 1 },
            { x: "g", y: 1 },
            { x: "h", y: 1 },
            { x: "i", y: 1 },
            { x: "j", y: 1 },
            { x: "k", y: 1 },
            { x: "l", y: 1 },
        ]
    ];

    function transformData(dataset) {
        const totals = dataset[0].map((data, i) => {
            return dataset.reduce((memo, curr) => {
                return memo + curr[i].y;
            }, 0);
        });
        return dataset.map((data) => {
            return data.map((datum, i) => {
                return { x: datum.x, y: (datum.y / totals[i]) * 100 };
            });
        });
    }
    const dataset = transformData(myDataset);

    return (
        <VictoryChart height={400} width={450}
                      domainPadding={{ x: 10, y: 20 }}
        >
            <VictoryStack
                colorScale={["black", "blue", "tomato"]}
            >
                {myDataset.map((data, i) => {
                    return <VictoryBar data={data} key={i}/>;
                })}
            </VictoryStack>
            <VictoryAxis dependentAxis
                         tickFormat={(tick) => `${tick}`}
            />
            <VictoryAxis
                tickFormat={["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"]}
            />
        </VictoryChart>
    );
};

export default MoreBarChart;
