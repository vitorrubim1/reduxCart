import { createStore } from "redux"; //createStore: função princípal, só é chamada uma vez

import rootReducer from "./modules/rootReducer"; //arquivo que contém todos módulos

//essa variável store, disponibilizará informações pra aplicação
const store = createStore(rootReducer);

export default store;
