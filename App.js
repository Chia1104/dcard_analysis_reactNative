import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Portal } from 'react-native-paper';
import MainNavTab from './src/components/MainNavTab'
import { Provider } from 'react-redux';
import store from './src/redux/store';

export default function App() {
    return (
        <Provider store={store}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Portal.Host>
                    <MainNavTab />
                </Portal.Host>
            </GestureHandlerRootView>
        </Provider>
    );
}
