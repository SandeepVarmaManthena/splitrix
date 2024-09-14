import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import rootSagas from "../saga/RootSaga";
import rootReducer from "../redux/RootReducer";


const sagaMiddleware = createSagaMiddleware()
const Store = configureStore({
    reducer: rootReducer, // Your root reducer
    middleware: [sagaMiddleware], // Add Saga middleware
  });

  sagaMiddleware.run(rootSagas); 



export default Store

