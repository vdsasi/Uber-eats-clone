

import React from 'react';
import Home from './screens/Home';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function App(): JSX.Element {

  return (
    <SafeAreaProvider >
      <SafeAreaView style = {{backgroundColor: '#eee', flex: 1}}>
        <Home/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
