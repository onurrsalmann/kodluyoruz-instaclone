import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import Router from './src/Router';
import reducers from './src/redux/reducers';

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <Router />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
