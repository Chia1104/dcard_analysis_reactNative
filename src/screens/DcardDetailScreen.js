import React, { useEffect, useState, useCallback } from "react";
import {ActivityIndicator, SafeAreaView, View, Text, FlatList, StyleSheet, Alert, Button, Linking} from "react-native";

const DcardDetailScreen = ({ route }) => {
    const [isLoading, setLoading] = useState(true);
    const [dcardData, setData] = useState([]);
    const {postId} = route.params;
    const articleURL = ' http://127.0.0.1:8000/api/article/' + postId;

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

    const supportedURL = "https://www.dcard.tw/f/cgu/p/" + postId;

    const OpenURLButton = ({ url, children }) => {
        const handlePress = useCallback(async () => {
            // Checking if the link is supported for links with custom URL scheme.
            const supported = await Linking.canOpenURL(url);

            if (supported) {
                // Opening the link with some app, if the URL scheme is "http" the web link should be opened
                // by some browser in the mobile
                await Linking.openURL(url);
            } else {
                Alert.alert(`Don't know how to open this URL: ${url}`);
            }
        }, [url]);

        return <Button title={children} onPress={handlePress} />;
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {isLoading ? <ActivityIndicator size="large" color="#0000ff" style={styles.progressBarStyle}/> : (
                <FlatList
                    data={dcardData}
                    keyExtractor={({ Id }, index) => Id}
                    renderItem={({ item }) => (
                        <View style={styles.containerStyle}>
                            <View style={{ marginBottom: 25 }}>
                                <OpenURLButton url={supportedURL}>Open Dcard</OpenURLButton>
                            </View>
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

                                <Text style={styles.dateStyle}>
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
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    progressBarStyle: {
        flex: 1,
        justifyContent: "center"
    },
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
        marginBottom: 7,
        fontWeight: "bold"
    },
    detailsStyle: {
        fontSize: 15
    },
    dateStyle: {
        fontSize: 15,
        color: "#AAAAAA"
    },
    contentStyle: {
        fontSize: 17,
        marginBottom: 7,
        lineHeight: 25,
        color: "#666666"
    }
});

export default DcardDetailScreen;
