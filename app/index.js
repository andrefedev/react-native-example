import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';


import configureStore from './redux/configStore';

const store = configureStore();
const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View>
          <Text>Hello world2!</Text>
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
