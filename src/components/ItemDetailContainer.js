import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const itemMock = {
  id: "1",
  name: "Producto",
  description: "Descripcion del producto",
  price: 15000,
  photo: process.env.PUBLIC_URL + "/images/keyboard.jpg",
};

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    new Promise((resolve) => setTimeout(() => resolve(itemMock), 2000)).then(
      (data) => setItem(data)
    );
  }, []);

  if (!item) {
    return <p>Loading...</p>;
  }

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
