//aqui nesse arquivo, unirei vários reducers dentro de um só estado

import { combineReducers } from "redux";

//reducers
import cart from "./cart/reducer";

export default combineReducers({
  cart,
});
