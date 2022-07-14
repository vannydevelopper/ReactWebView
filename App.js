import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/AppContainer';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import { store } from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
          <AppContainer/>
      </NativeBaseProvider>
    </Provider>
    
  );
}


