import { createHashHistory,createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from "redux-saga";

import rootReducers from "./reducer";
import rootSaga from "./saga";

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  connectRouter(history)(rootReducers), // new root reducer with router state
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      sagaMiddleware
    ),
  ),
)

sagaMiddleware.run(rootSaga)