import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import aboutUs from './pages/aboutUs/aboutUsReducer';
import images from './pages/images/imagesReducer';
import openingHours from './pages/openingHours/openingHoursReducer';
import appSettings from './pages/appSettings/appSettingsReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  aboutUs,
  images,
  openingHours,
  appSettings
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
