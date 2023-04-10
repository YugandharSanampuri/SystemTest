import React from 'react';
import Main from './app/Main';
import {Provider} from 'react-redux';
import store from './app/redux/store';
import { StyleSheet, SafeAreaView, Platform,AppState } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <Main />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
