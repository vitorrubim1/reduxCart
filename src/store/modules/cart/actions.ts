//arquivo que dispará funções referente ao módulo, que irão alterar o estado no redux

import { IProduct } from "./types";

export function addProductToCartRequest(product: IProduct) {
  /* 
    toda action precisa exportar um objeto, que tem um propriedade obrigatória (type)
    type: é uma string que identifica cada uma das actions
    payload: são informações adicionais, que recebo por parâmetro por exemplo
  */

  return {
    type: "ADD_PRODUCT_TO_CART_REQUEST",
    payload: { product },
  };
}

export function addProductToCartSuccess(product: IProduct) {
  return {
    type: "ADD_PRODUCT_TO_CART_SUCCESS",
    payload: { product },
  };
}

export function addProductToCartFailure(productId: number) {
  return {
    type: "ADD_PRODUCT_TO_CART_FAILURE",
    payload: { productId },
  };
}
