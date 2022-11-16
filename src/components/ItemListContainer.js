import { useState } from "react";

// Own components
import ItemList from "./ItemList";

// Data
import { productsData } from "../data/index";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const productList = new Promise((resolve) =>
    setTimeout(() => {
      resolve(productsData);
    }, 3000)
  );

  productList.then((data) => setItems(data));

  if (items.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="h-full">
      <ItemList products={items} />
    </div>
  );
};

export default ItemListContainer;
