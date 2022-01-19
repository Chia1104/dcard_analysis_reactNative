import React from "react";
import { SafeAreaView, FlatList, View, Text, StyleSheet, useColorScheme } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryGroup } from "victory-native";

const HomeGBChart = () => {
    const colorScheme = useColorScheme();
    const themeTextColor = colorScheme === 'light' ? "black" : "white";
    return (
        <VictoryChart
            width={350}
            theme={VictoryTheme.material}>
            <VictoryGroup offset={20}
                          // animate={{
                          //     duration: 2000,
                          //     onLoad: { duration: 1000 }
                          // }}
                          categories={{
                              x: ["2021-11", "2021-10", "2021-09"]
                          }}
                          colorScale={["#00DDAA", "#FFDD55", "#FFA488"]}
                          events={[{
                              childName: "all",
                              target: "data",
                              eventHandlers: {
                                  onClick: () => {
                                      return [
                                          {
                                              childName: "pos",
                                              target: "data",
                                              mutation: (props) => ({ style: Object.assign({}, props.style, { fill: "gold" }) })
                                          }, {
                                              childName: "neu",
                                              target: "data",
                                              mutation: (props) => ({ style: Object.assign({}, props.style, { fill: "orange" }) })
                                          }, {
                                              childName: "neg",
                                              target: "data",
                                              mutation: (props) => ({ style: Object.assign({}, props.style, { fill: "red" }) })
                                          }
                                      ];
                                  }
                              }
                          }]}
                          height={350}

            >
                <VictoryBar
                    name="pos"
                    labels={({ datum }) => datum.y}
                    style={{ labels: { fill: themeTextColor, fontSize: 13} }}
                    data={[{ x: "2021-11", y: 13 }, { x: "2021-10", y: 32 }, { x: "2021-09", y: 20 }]
                }
                />
                <VictoryBar
                    name="neu"
                    labels={({ datum }) => datum.y}
                    style={{ labels: { fill: themeTextColor, fontSize: 13} }}
                    data={[{ x: "2021-11", y: 7 }, { x: "2021-10", y: 10 }, { x: "2021-09", y: 20 }]
                }
                />
                <VictoryBar
                    name="neg"
                    labels={({ datum }) => datum.y}
                    style={{ labels: { fill: themeTextColor, fontSize: 13} }}
                    data={[{ x: "2021-11", y: 55 }, { x: "2021-10", y: 205 }, { x: "2021-09", y: 156 }]
                }
                />
            </VictoryGroup>
        </VictoryChart>
    );
};

export default HomeGBChart;
