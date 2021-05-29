import { AxiosResponse } from "axios";
import { all, takeLatest, select, call, put } from "redux-saga/effects"; /*
  takeLatest: executa apenas a última ocorrência/ação.
  select: serve pra buscar informações do estado
  call: responsável por fazer chamadas a API's, recebe dois parâmetros.
    1: qual função assíncrona quero executar (qualquer promisse)
    2: os parâmetros
  put: mesma coisa que o dispatch, dispara uma ação
*/
import { IState } from "../..";
import api from "../../../services/api";

import {
  addProductToCartFailure,
  addProductToCartRequest,
  addProductToCartSuccess,
} from "./actions";
import { ActionTypes } from "./types";

//nesse arquivo estarão as configurações do saga, relacionado a esse módulo em si

//definindo o retorno da action que recebo por parâmetro na função checkProductStock
type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>;

//retorno da chamada a API
interface IStockResponse {
  id: number;
  quantity: number;
}

//verifica estoque do produto, e que por padrão tenho acesso a action e ao payload
function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload;

  //obtendo a quantidade do produto que está no carrinho, se não tiver é 0
  const currentQuantity: number = yield select((state: IState) => {
    return (
      state.cart.items.find((item) => item.product.id === product.id)
        ?.quantity ?? 0
    );
  });

  //buscando na api a quantidade do produto que recebo por parâmetro
  const availableStockResponse: AxiosResponse<IStockResponse> = yield call(
    api.get,
    `stock/${product.id}`
  );

  if (availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCartSuccess(product));
  } else {
    yield put(addProductToCartFailure(product.id));
  }
}

export default all([
  //primeiro parâmetro: qual action quero ouvir, segundo: que função executarei caso a action seja chamada
  takeLatest(ActionTypes.addProductToCartRequest, checkProductStock),
]);
