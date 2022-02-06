import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Portal } from 'react-native-paper';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Index from "./index";

export default function App() {
    return (
        <Provider store={store}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Portal.Host>
                    <SafeAreaProvider>
                        <NativeBaseProvider>
                            <Index />
                        </NativeBaseProvider>
                    </SafeAreaProvider>
                </Portal.Host>
            </GestureHandlerRootView>
        </Provider>
    );
}
