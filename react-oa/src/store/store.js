import { createHashHistory,createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from "redux-saga";

import rootReducers from "./reducer";
import rootSaga from "./saga";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const history = createBrowserHistory()

export const store = createStore(
  connectRouter(history)(persistedReducer), // new root reducer with router state
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      sagaMiddleware
    ),
  ),
)

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)