import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppProvider from './src/context/AppProvider';
import Route from './src/route/Route';

export default function App() {
  return (
    <AppProvider>
      <SafeAreaProvider>
        <Route />
      </SafeAreaProvider>
    </AppProvider>
  );
}
