import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, View, Text } from "react-native";

const DcardDetailScreen = () => {
    // const [isLoading, setLoading] = useState(true);
    // const [dcardData, setData] = useState([]);
    //
    // const getDcardDetail = async () => {
    //     try {
    //         const response = await fetch('https://dcardanalysislaravel-sedok4caqq-de.a.run.app/article/', {
    //             method: 'GET',
    //             credentials: 'omit',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json',
    //                 'Access-Control-Allow-Origin': '*',
    //                 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    //             }
    //         });
    //         const jsonRawData = await response.json();
    //         setData(jsonRawData);
    //     } catch (error) {
    //         console.error(error);
    //     } finally {
    //         setLoading(false);
    //     }
    // }
    //
    // useEffect(() => {
    //     getDcardDetail();
    // }, []);

    return (
        <ScrollView style={{ flex: 1 }}>
            {/*{isLoading ? <ActivityIndicator/> : (*/}
            {/*    <View>*/}
            {/*        <Text>*/}
            {/*            test*/}
            {/*        </Text>*/}
            {/*    </View>*/}
            {/*)}*/}
            <View>
                <Text>
                    test
                </Text>
            </View>
        </ScrollView>
    );
};

export default DcardDetailScreen;
