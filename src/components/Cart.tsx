import { useSelector } from "react-redux";

import { IState } from "../store/index";
import { ICartItem } from "../store/modules/cart/types";

const Cart: React.FC = () => {
  //primeiro faço a typagem de quais estados terei dentro de state, e dps das informações que eu quero
  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);

  return (
    <table style={{ marginTop: "100px" }}>
      <thead>
        <tr>
          <td>Produto</td>
          <td>Preço</td>
          <td>Quantidade</td>
          <td>Subtotal</td>
        </tr>
      </thead>

      <tbody>
        {cart.map((item) => (
          <tr key={item.product.id}>
            <td>{item.product.title}</td>
            <td>{item.product.price}</td>
            <td>{item.quantity}</td>
            <td>{(item.product.price * item.quantity).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Cart;
