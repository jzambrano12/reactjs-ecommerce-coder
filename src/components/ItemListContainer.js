import { useState } from "react";

// Own components
import ItemList from "./ItemList";

const productos = [
  {
    id: "1",
    name: "Keyboard",
    description: "Keyboard description",
    stock: 5,
    img: "https://m.media-amazon.com/images/I/61vjNMgYGLL._AC_SX679_.jpg",
  },
  {
    id: "2",
    name: "Mouse",
    description: "Mouse description",
    stock: 2,
    img: "https://m.media-amazon.com/images/I/51pMqozCpML._AC_SX679_.jpg",
  },
];

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const productList = new Promise((resolve) =>
    setTimeout(() => {
      resolve(productos);
    }, 3000)
  );

  productList.then((data) => setProducts(data));

  return (
    <div className="h-full">
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
