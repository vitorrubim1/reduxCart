//arquivo que dispará funções referente ao módulo, que irão alterar o estado no redux

import { ActionTypes, IProduct } from "./types";

export function addProductToCartRequest(product: IProduct) {
  /* 
    toda action precisa exportar um objeto, que tem um propriedade obrigatória (type)
    type: é uma string que identifica cada uma das actions
    payload: são informações adicionais, que recebo por parâmetro por exemplo
  */

  return {
    type: ActionTypes.addProductToCartRequest,
    payload: { product },
  };
}

export function addProductToCartSuccess(product: IProduct) {
  return {
    type: ActionTypes.addProductToCartSuccess,
    payload: { product },
  };
}

export function addProductToCartFailure(productId: number) {
  return {
    type: ActionTypes.addProductToCartFailure,
    payload: { productId },
  };
}
