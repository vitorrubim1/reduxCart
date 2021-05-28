import { Reducer } from "redux"; //esse Reducer é preciso quando for typar o módulo

import { ICartState } from "./types";

/*
 * Reducer é o ponto central de um estado.
 *  é o reducer que determina as informações que um módulo/estado terá
 *  é no reducer que fica a regra de negócio
 */

const INITIAL_STATE: ICartState = {
  items: [],
};

// hero function pra ser typada, e já definindo o state
const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART": {
      const { product } = action.payload;

      //imutabilidade, retorno oq já tenho e adiciono ao final oq recebo
      return {
        ...state,
        items: [
          ...state.items,
          {
            product,
            quantity: 1,
          },
        ],
      };
    }

    default: {
      return state;
    }
  }
};

export default cart;
