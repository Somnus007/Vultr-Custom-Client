import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {
  seamlessImmutableReconciler,
  seamlessImmutableTransformCreator,
} from 'redux-persist-seamless-immutable';
import rootReducer from './reducers';
import rootSaga from './sagas';

// Add other middlewares
const middlewares = [];

// --- Add saga ---
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);
// --- Add saga ---

// --- Add router to redux ---
export const history = createHashHistory(); // use one of [createBrowserHistory, createHashHistory]
middlewares.push(routerMiddleware(history));
// --- Add router to redux ---

const middlewareEnhancer = applyMiddleware(...middlewares);

// Add other enhancers
const enhancers = [middlewareEnhancer];

// compose with redux dev tools
const composedEnhancers = composeWithDevTools(...enhancers);

const persistConfig = {
  key: 'root',
  storage,
  //   stateReconciler: autoMergeLevel2,
  whitelist: ['persist'],
  stateReconciler: seamlessImmutableReconciler,
  transforms: [seamlessImmutableTransformCreator({})],
};

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

const store = createStore(persistedReducer, composedEnhancers);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default { store, persistor };
