import React, {useEffect, useState} from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Portal } from 'react-native-paper';
import MainNavTab from './src/components/MainNavTab'
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { NativeBaseProvider } from "native-base";
import LoginScreen from './src/screens/LoginScreen';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
    const [userInfo,setUserInfo]=useState(null)
    const getUserInfo = async () => {
        try {
            const item = await AsyncStorage.getItem('userInfo');
            const itemParse = JSON.parse(item);
            setUserInfo(itemParse)
        } catch (e) {
            setUserInfo(null)
            console.log("error", e);
        }
    };
    useEffect(() => {
        getUserInfo();
    }, [])
    return (
        <Provider store={store}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Portal.Host>
                    <SafeAreaProvider>
                        <NativeBaseProvider>
                            <MainNavTab />
                        </NativeBaseProvider>
                    </SafeAreaProvider>
                </Portal.Host>
            </GestureHandlerRootView>
        </Provider>
    );
}
