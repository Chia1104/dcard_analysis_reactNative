import React, { useEffect, useState } from "react";
import {ActivityIndicator, ScrollView, View, Text, FlatList, StyleSheet} from "react-native";

const DcardDetailScreen = ({ route, navigation, dcard }) => {
    const [isLoading, setLoading] = useState(true);
    const [dcardData, setData] = useState([]);
    const {postId} = route.params;
    let articleURL = 'https://dcardanalysislaravel-sedok4caqq-de.a.run.app/api/article/' + postId;

    const getDcardDetail = async () => {
        try {
            const response = await fetch(articleURL, {
                method: 'GET',
                credentials: 'omit',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                }
            });
            const jsonRawData = await response.json();
            setData(jsonRawData);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getDcardDetail();
    }, []);

    return (
        <ScrollView style={{ flex: 1 }}>
            {isLoading ? <ActivityIndicator/> : (
                <FlatList
                    data={dcardData}
                    keyExtractor={({ Id }, index) => Id}
                    renderItem={({ item }) => (
                        <View style={styles.containerStyle}>
                            <Text style={styles.titleStyle}>
                                {item.Title}
                            </Text>
                            <View style={styles.box1}>
                                <View style={styles.box2}>
                                    <Text style={styles.detailsStyle}>
                                        {item.SA_Class}
                                    </Text>
                                    <Text style={styles.detailsStyle}>
                                        ({item.SA_Score})
                                    </Text>
                                </View>

                                <Text style={styles.detailsStyle}>
                                    {item.CreatedAt}
                                </Text>
                            </View>
                            <View style={styles.box1}>
                                <Text style={styles.detailsStyle}>
                                    {item.KeywordLevel1}
                                </Text>
                                <Text style={styles.detailsStyle}>
                                    {item.KeywordLevel2}
                                </Text>
                                <Text style={styles.detailsStyle}>
                                    {item.KeywordLevel3}
                                </Text>
                            </View>
                            <Text style={styles.contentStyle}>
                                {item.Content}
                            </Text>
                        </View>
                    )}
                />
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        padding: 10,
        margin: 10
    },
    box1: {
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%",
        marginBottom: 7
    },
    box2: {
        flexDirection: "row"
    },
    titleStyle: {
        fontSize: 25,
        marginBottom: 7
    },
    detailsStyle: {
        fontSize: 15
    },
    contentStyle: {
        fontSize: 17,
        marginBottom: 7
    }
});

export default DcardDetailScreen;
