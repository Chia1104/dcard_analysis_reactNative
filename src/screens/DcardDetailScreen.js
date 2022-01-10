import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, View, Text, FlatList } from "react-native";

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
                        <View>
                            <Text>
                                {item.Title}
                            </Text>
                            <Text>
                                {item.Content}
                            </Text>
                            <Text>
                                {item.CreatedAt}
                            </Text>
                            <Text>
                                {item.SA_Class}
                            </Text>

                        </View>
                    )}
                />
            )}
        </ScrollView>
    );
};

export default DcardDetailScreen;
