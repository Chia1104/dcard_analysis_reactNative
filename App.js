import React from 'react';
import 'react-native-gesture-handler';
import { Portal, Provider } from 'react-native-paper';
import MainNavTab from './src/components/MainNavTab'

export default function App() {
  return (
          <Portal.Host>
              <MainNavTab />
          </Portal.Host>
  );
}

