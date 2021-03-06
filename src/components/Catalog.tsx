import { useEffect, useState } from "react";

import api from "../services/api";

import CatalogItem from "./CatalogItem";

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
        <CatalogItem key={product.id} product={product} />
      ))}
    </main>
  );
};

export default Catalog;
