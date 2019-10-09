import {applyMiddleware, createStore} from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import rootReducer from './reducers/rootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export default function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware, loggerMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  return createStore(
    persistReducer(persistConfig, rootReducer),
    preloadedState,
    middlewareEnhancer,
  );
};
