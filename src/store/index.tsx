import { createStore } from "redux"; //createStore: função princípal, só é chamada uma vez

import rootReducer from "./modules/rootReducer"; //arquivo que contém todos módulos

import { ICartState } from "./modules/cart/types";

export interface IState {
  cart: ICartState;
}

//essa variável store, disponibilizará informações pra aplicação
const store = createStore(rootReducer);

export default store;
