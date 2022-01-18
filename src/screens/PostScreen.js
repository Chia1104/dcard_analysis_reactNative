import React, { useEffect, useState, useCallback} from "react";
import { ActivityIndicator, SafeAreaView, FlatList, TouchableOpacity, RefreshControl, Text, StyleSheet , useColorScheme} from "react-native";
import DcardList from "../components/DcardList";
import FloatingButton from "../components/FloatingButton";

const PostScreen = ({ navigation }) => {

    const [isLoading, setLoading] = useState(true);
    const [dcardData, setData] = useState([]);
    const [moreData, setMoreData] = useState([]);

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

    const getMoreDcards = useCallback(async () => {
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
    }, [moreData]);

    useEffect(() => {
        getDcards();
    }, []);

    return (
        <SafeAreaView style={[{ flex: 1 }, themeContainerStyle2]}>
            {isLoading ? <ActivityIndicator size="large" color="#0000ff" style={styles.progressBarStyle}/> : (
                <FlatList
                    data={dcardData}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => navigation.navigate('detailStack', {
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
            <FloatingButton/>
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    progressBarStyle: {
        flex: 1,
        justifyContent: "center"
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

export default PostScreen;
