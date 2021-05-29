import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../store";

import { addProductToCartRequest } from "../store/modules/cart/actions";
import { IProduct } from "../store/modules/cart/types";

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>(
    (state) => state.cart.failedStockCheck.includes(product.id) //se no array de produtos em falta inclui o produto do parâmetro
  );

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <article>
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}R$</span> {"  "}
      <button
        type="button"
        onClick={handleAddProductToCart}
        disabled={!!hasFailedStockCheck}
      >
        Comprar
      </button>
      {hasFailedStockCheck && (
        <span style={{ color: "red", marginLeft: "5px" }}>
          Falta de estoque
        </span>
      )}
    </article>
  );
};

export default CatalogItem;
