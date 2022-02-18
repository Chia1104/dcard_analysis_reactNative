import React, { useEffect, useState, useCallback } from "react";
import { ActivityIndicator, SafeAreaView, FlatList, TouchableOpacity, RefreshControl, Text, StyleSheet , useColorScheme, View, ScrollView} from "react-native";
import DcardList from "../components/DcardList";
import FloatingButton from "../components/FloatingButton";
import { useDispatch, useSelector } from "react-redux";
import {setDcardsList} from "../redux/actions/DcardsAction";
import LoadingList from "../components/LoadingList";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PostScreen = ({ navigation }) => {

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
    const themeProgressBarStyle = colorScheme === 'light' ? styles.lightProgressBar : styles.darkProgressBar;

    const [userInfo,setUserInfo]=useState(null)

    const getDcardList = async () => {
        try {
            const item = await AsyncStorage.getItem('userInfo');
            const itemParse = JSON.parse(item);
            setUserInfo(itemParse.token)
            dispatch(setDcardsList(itemParse.token));
        } catch (e) {
            setUserInfo(null)
            dispatch(setDcardsList(userInfo));
            console.log("error", e);
        }
    }

    const allDcards = useSelector((state) => state.dcards.allDcards);
    const { loading } = useSelector((state) => state.dcards.requestDcards);
    const dispatch = useDispatch();
    useEffect(() => {
        getDcardList();
    }, [])

    return (
        <SafeAreaView style={[{ flex: 1 }, themeContainerStyle2]}>
            {loading === true ? (
                <LoadingList />
            ) : (
                <FlatList
                    data={allDcards.data}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.push("detailStack", {
                                    postId: item.Id,
                                })
                            }
                        >
                            <DcardList dcard={item} navigation={navigation} />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.Id}
                    onEndReached={null}
                    onEndReachedThreshold={0.9}
                    extraData={null}
                />
            )}
            <FloatingButton />
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    lightProgressBar: {
        color: "black"
    },
    darkProgressBar: {
        color: "white"
    },
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
