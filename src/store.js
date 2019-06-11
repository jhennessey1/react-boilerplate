import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import reducer from './reducers';

const sagaMiddleware = createSagaMiddleware(rootSaga);

export default createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
