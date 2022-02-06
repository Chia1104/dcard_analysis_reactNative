import React, {useEffect, useState} from 'react';
import MainNavTab from './src/components/MainNavTab'
import LoginScreen from './src/screens/LoginScreen';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useSelector} from "react-redux";

const Index = () => {
    const verified = useSelector((state) => state.auth.verified);
    const [userInfo,setUserInfo]=useState(null)
    const getUserInfo = async () => {
        try {
            const item = await AsyncStorage.getItem('userInfo');
            const itemParse = JSON.parse(item);
            setUserInfo(itemParse.token)
        } catch (e) {
            setUserInfo(null)
            console.log("error", e);
        }
    };
    useEffect(() => {
        getUserInfo();
    }, [verified])

    return (
        userInfo != null ? (
            <>
                <MainNavTab />
            </>
        ) : (
            <>
                <LoginScreen />
            </>
        )
    );
};

export default Index;
