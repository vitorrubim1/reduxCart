import { all } from "redux-saga/effects";

import cart from "./cart/sagas"; //sagas do módulo

//* = async
export default function* rootSaga() {
  yield all([cart]);
}
