import { all, takeLatest } from "redux-saga/effects"; //takeLatest: executa apenas a última ocorrência/ação

//aq estarão as configurações do saga, relacionado a esse módulo em si

//função para verificar estoque do produto
function checkProductStock() {
  console.log("Adicionou ao carrinho");
}

export default all([
  //primeiro parâmetro: qual action quero ouvir, segundo: que função executarei caso a action seja chamada
  takeLatest("ADD_PRODUCT_TO_CART", checkProductStock),
]);
