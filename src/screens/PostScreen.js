import React, { useEffect, useState} from "react";
import { ActivityIndicator, SafeAreaView, FlatList, TouchableOpacity, RefreshControl, Text } from "react-native";
import DcardList from "../components/DcardList";

const PostScreen = ({ navigation }) => {

    const [isLoading, setLoading] = useState(true);
    const [dcardData, setData] = useState([]);
    const [moreData, setMoreData] = useState([]);

    const getDcards = async () => {
        try {
            const response = await fetch('https://dcardanalysislaravel-sedok4caqq-de.a.run.app/api/getAllDcard', {
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

    const getMoreDcards = async () => {
        try {
            const response = await fetch('https://dcardanalysislaravel-sedok4caqq-de.a.run.app/api/getAllDcard/before/237397832', {
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
            setMoreData(jsonRawData);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getDcards();
    }, []);

    const re_Render_FlatList = () => {
        setMoreData(moreData);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {isLoading ? <ActivityIndicator/> : (
                <FlatList
                    data={dcardData}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => navigation.navigate('Detail', {
                            postId: item.Id})}>
                            <DcardList
                                dcard={item}
                                navigation={navigation}
                            />
                        </TouchableOpacity>
                    }
                    keyExtractor={item => item.Id}
                    refreshControl={
                        <RefreshControl refreshing={isLoading}
                                        onRefresh={getDcards} />
                    }
                    extraData={moreData}
                />
            )}
        </SafeAreaView>
    );

};

export default PostScreen;
