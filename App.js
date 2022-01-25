import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Portal } from 'react-native-paper';
import MainNavTab from './src/components/MainNavTab'

export default function App() {
  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
          <Portal.Host>
              <MainNavTab />
          </Portal.Host>
      </GestureHandlerRootView>
  );
}

