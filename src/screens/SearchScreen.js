import React, {useEffect, useState} from "react";
import {SafeAreaView, FlatList, View, Text, StyleSheet, useColorScheme, TouchableOpacity} from "react-native";
import { Searchbar, Provider } from 'react-native-paper';
import DcardList from "../components/DcardList";
import {useDispatch, useSelector} from "react-redux";
import {searchDcard, setDcardDetail} from "../redux/actions/DcardsAction";
import LoadingList from "../components/LoadingList";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SearchScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChange = query => setSearchQuery(query);

    const allDcards = useSelector((state) => state.dcards.searchDcard);
    const { loading } = useSelector((state) => state.dcards.requestSearchDcard);

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

    const [userInfo,setUserInfo] = useState(null)
    const getSearchDcard = async () => {
        try {
            const item = await AsyncStorage.getItem('userInfo');
            const itemParse = JSON.parse(item);
            setUserInfo(itemParse.token)
            dispatch(searchDcard(searchQuery, itemParse.token))
        } catch (e) {
            setUserInfo(null)
            dispatch(searchDcard(searchQuery, userInfo))
            console.log("error", e);
        }
    };

    return (
        <SafeAreaView style={[{ flex: 1 }, themeContainerStyle2]}>
            <Provider>
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChange}
                    onIconPress={(query) => {
                        // setSearchQuery(query)
                        getSearchDcard()
                    }}
                    value={searchQuery}
                />
                {loading === true ? (
                    <LoadingList />
                ) : (
                    <FlatList
                        data={allDcards}
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
            </Provider>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
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

export default SearchScreen;
