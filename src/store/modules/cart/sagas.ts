import { all, takeLatest, select } from "redux-saga/effects"; /*
  takeLatest: executa apenas a última ocorrência/ação.
  select: serve pra buscar informações do estado
*/
import { IState } from "../..";

import { addProductToCart } from "./actions";

//nesse arquivo estarão as configurações do saga, relacionado a esse módulo em si

//definindo o retorno da action que recebo por parâmetro na função checkProductStock
type CheckProductStockRequest = ReturnType<typeof addProductToCart>;

//verifica estoque do produto, e que por padrão tenho acesso a action e ao payload
function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload;

  //obtendo a quantidade do produto que recebo no carrinho
  const currentQuantity: number = yield select((state: IState) => {
    return (
      state.cart.items.find((item) => item.product.id === product.id)
        ?.quantity ?? 0
    );
  });

  console.log("Adicionou ao carrinho", currentQuantity);
}

export default all([
  //primeiro parâmetro: qual action quero ouvir, segundo: que função executarei caso a action seja chamada
  takeLatest("ADD_PRODUCT_TO_CART", checkProductStock),
]);
