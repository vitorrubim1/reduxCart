import { createStore, applyMiddleware } from "redux"; //createStore: função princípal, só é chamada uma vez. applyMiddleware: aplicar middleware
import { composeWithDevTools } from "redux-devtools-extension"; //pra debugar no navegador
import createSagaMiddleware from "redux-saga";

import { ICartState } from "./modules/cart/types";

import rootReducer from "./modules/rootReducer"; //arquivo que contém todos módulos combinados
import rootSaga from "./modules/rootSaga"; //arquivo que contém funções do saga

export interface IState {
  cart: ICartState;
}

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware]; //posso adicionar mais middlewares do redux nesse array

//essa variável store, disponibilizará informações pra aplicação
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

//funções do saga
sagaMiddleware.run(rootSaga);

export default store;
