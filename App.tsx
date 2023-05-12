import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default function App() {
  return (
    <SafeAreaProvider>
      <Home/>
    </SafeAreaProvider>
  );
}

