import React, { useEffect, useState, useCallback } from "react";
import { ActivityIndicator, SafeAreaView, FlatList, TouchableOpacity, RefreshControl, Text, StyleSheet , useColorScheme, View, ScrollView} from "react-native";
import DcardList from "../components/DcardList";
import FloatingButton from "../components/FloatingButton";
import { useDispatch, useSelector } from "react-redux";
import {setDcardsList, setMoreDcardsList} from "../redux/actions/DcardsAction";
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
            dispatch(setDcardsList(1, itemParse.token));
        } catch (e) {
            setUserInfo(null)
            dispatch(setDcardsList(userInfo));
            console.log("error", e);
        }
    }

    const allDcards = useSelector((state) => state.dcards.allDcards);
    let dcards = allDcards.data;
    const { loading } = useSelector((state) => state.dcards.requestDcards);
    const moreDcards = useSelector((state) => state.dcards.moreDcards);
    let moredcards = moreDcards.data;
    const { loadingMore } = useSelector((state) => state.dcards.requestMoreDcards);
    const dispatch = useDispatch();
    useEffect(() => {
        getDcardList();
    }, [])

    let page = 0;
    const getMoreDcardList = async () => {
        if (page < allDcards.last_page) {
            page += 1;
        }
        try {
            const item = await AsyncStorage.getItem('userInfo');
            const itemParse = JSON.parse(item);
            setUserInfo(itemParse.token)
            dispatch(setMoreDcardsList(page, itemParse.token));
            dcards.push(moredcards);
        } catch (e) {
            setUserInfo(null)
            dispatch(setDcardsList(userInfo));
            console.log("error", e);
        }
    }

    return (
        <SafeAreaView style={[{ flex: 1 }, themeContainerStyle2]}>
            {loading === true ? (
                <LoadingList />
            ) : (
                <FlatList
                    data={dcards}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.push("detailStack", {
                                    postId: item.id,
                                })
                            }
                        >
                            <DcardList dcard={item} navigation={navigation} />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id}
                    onEndReached={null}
                    onEndReachedThreshold={0.9}
                    extraData={moreDcards}
                />)}
                {loadingMore === true ? (
                    <LoadingList />
                ) : (
                    <></>
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
