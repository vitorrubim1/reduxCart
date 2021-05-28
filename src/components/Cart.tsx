import { useSelector } from "react-redux";

const Cart: React.FC = () => {
  const state = useSelector((state) => state);

  console.log(state);

  return (
    <table>
      <thead>
        <tr>
          <td>Produto</td>
          <td>Preço</td>
          <td>Quantidade</td>
          <td>Subtotal</td>
        </tr>
      </thead>

      <tbody></tbody>
    </table>
  );
};

export default Cart;
