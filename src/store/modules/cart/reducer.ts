import { Reducer } from "redux"; //esse Reducer é preciso quando for typar o módulo
import produce from "immer";

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
  return produce(state, (draft) => {
    switch (action.type) {
      case "ADD_PRODUCT_TO_CART":
        {
          const { product } = action.payload;

          //imutabilidade, retorno oq já tenho e adiciono ao final oq recebo

          //agora o draft tem o mesmo formato do state, porém consigo adicionar um item como se não houvesse imutabilidade dando push

          draft.items.push({ product, quantity: 1 });
        }

        break;

      default: {
        return draft;
      }
    }
  }); //produce: fará a produção de um novo estado a partir do rascunho(draft) do estado anterior
};

export default cart;
