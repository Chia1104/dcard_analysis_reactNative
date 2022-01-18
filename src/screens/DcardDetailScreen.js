import React, { useEffect, useState, useCallback } from "react";
import {ActivityIndicator, SafeAreaView, View, Text, FlatList, StyleSheet, Alert, Button, Linking, useColorScheme} from "react-native";

const DcardDetailScreen = ({ route }) => {
    const [isLoading, setLoading] = useState(true);
    const [dcardData, setData] = useState([]);
    const {postId} = route.params;
    const articleURL = 'https://dcardanalysislaravel-sedok4caqq-de.a.run.app/api/article/' + postId;

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
        <SafeAreaView style={[{ flex: 1 }, themeContainerStyle2]}>
            {isLoading ? <ActivityIndicator size="large" color="#0000ff" style={styles.progressBarStyle}/> : (
                <FlatList
                    data={dcardData}
                    keyExtractor={({ Id }, index) => Id}
                    renderItem={({ item }) => (
                        <View style={styles.containerStyle}>
                            <View style={{ marginBottom: 25 }}>
                                <OpenURLButton url={supportedURL}>Open Dcard</OpenURLButton>
                            </View>
                            <Text style={[styles.titleStyle, themeTextStyle]}>
                                {item.Title}
                            </Text>
                            <View style={styles.box1}>
                                <View style={styles.box2}>
                                    <Text style={[styles.detailsStyle, themeTextStyle]}>
                                        {item.SA_Class}
                                    </Text>
                                    <Text style={[styles.detailsStyle, themeTextStyle]}>
                                        ({item.SA_Score})
                                    </Text>
                                </View>

                                <Text style={[styles.dateStyle, themeTextStyle]}>
                                    {item.CreatedAt}
                                </Text>
                            </View>
                            <View style={styles.box1}>
                                <Text style={[styles.detailsStyle, themeTextStyle]}>
                                    {item.KeywordLevel1}
                                </Text>
                                <Text style={[styles.detailsStyle, themeTextStyle]}>
                                    {item.KeywordLevel2}
                                </Text>
                                <Text style={[styles.detailsStyle, themeTextStyle]}>
                                    {item.KeywordLevel3}
                                </Text>
                            </View>
                            <Text style={[styles.contentStyle, themeTextStyle]}>
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

export default DcardDetailScreen;
