import React, { useEffect, useState, useCallback} from "react";
import { ActivityIndicator, SafeAreaView, FlatList, TouchableOpacity, RefreshControl, Text, StyleSheet } from "react-native";
import DcardList from "../components/DcardList";
import FloatingBotton from "../components/FloatingBotton";
import { Searchbar } from 'react-native-paper';

const PostScreen = ({ navigation }) => {

    const [isLoading, setLoading] = useState(true);
    const [dcardData, setData] = useState([]);
    const [moreData, setMoreData] = useState([]);

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    const getDcards = async () => {
        try {
            const response = await fetch('https://dcardanalysislaravel-sedok4caqq-de.a.run.app/api/getAllDcard/30', {
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
            const response = await fetch('https://dcardanalysislaravel-sedok4caqq-de.a.run.app/api/getAllDcard/before/237397832/30', {
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

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            {isLoading ? <ActivityIndicator size="large" color="#0000ff" style={styles.progressBarStyle}/> : (
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
                    onEndReached={getMoreDcards}
                    onEndReachedThreshold={0.9}
                    extraData={moreData}
                />
            )}
            <FloatingBotton/>
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    progressBarStyle: {
        flex: 1,
        justifyContent: "center"
    }
});

export default PostScreen;
