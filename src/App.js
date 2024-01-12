import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Root from './Root';
import {View, Text, Image} from 'react-native';
import {images, icons} from './constants';
import {Provider} from 'react-redux';
import {store, persistor} from './redux';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
