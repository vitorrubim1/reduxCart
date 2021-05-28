import { Reducer } from "redux"; //esse Reducer é preciso quando for typar o módulo

import { ICartState } from "./types";

/*
 * Reducer é o ponto central de um estado.
 *  é o reducer que determina as informações que um módulo/estado terá
 */

const INITIAL_STATE: ICartState = {
  items: [],
};

// hero function pra ser typada
const cart: Reducer<ICartState> = () => {
  return INITIAL_STATE;
};

export default cart;
