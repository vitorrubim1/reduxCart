import { useEffect, useState } from "react";
import api from "../services/api";

import { IProduct } from "../store/modules/cart/types";

const Catalog: React.FC = () => {
  const [catalogs, setCatalogs] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get("products").then((response) => {
      setCatalogs(response.data);
    });
  }, []);

  return (
    <main>
      <h1>Catalogs</h1>

      {catalogs.map((product) => (
        <article key={product.id}>
          <strong>{product.title}</strong> {" - "}
          <span>{product.price}R$</span> {"  "}
          <button type="button">Comprar</button>
        </article>
      ))}
    </main>
  );
};

export default Catalog;
