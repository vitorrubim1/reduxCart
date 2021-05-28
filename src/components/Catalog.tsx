import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { addProductToCart } from "../store/modules/cart/actions";
import api from "../services/api";

import { IProduct } from "../store/modules/cart/types";

const Catalog: React.FC = () => {
  const [catalogs, setCatalogs] = useState<IProduct[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    api.get("products").then((response) => {
      setCatalogs(response.data);
    });
  }, []);

  const handleAddProductToCart = useCallback(
    (product: IProduct) => {
      dispatch(addProductToCart(product));
    },
    [dispatch]
  );

  return (
    <main>
      <h1>Catalogs</h1>

      {catalogs.map((product) => (
        <article key={product.id}>
          <strong>{product.title}</strong> {" - "}
          <span>{product.price}R$</span> {"  "}
          <button type="button" onClick={() => handleAddProductToCart(product)}>
            Comprar
          </button>
        </article>
      ))}
    </main>
  );
};

export default Catalog;
