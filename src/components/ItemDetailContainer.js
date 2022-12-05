import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom";
import { Items } from "../mocks/items.mock";
import { Loading } from "./Loading";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    new Promise((resolve) =>
      // Simulation of a call to an api
      setTimeout(() => {
        const itemFiltered = Items.find((item) => item.id === id);
        resolve(itemFiltered);
      }, 1000)
    ).then((data) => setItem(data));
  }, [id]);

  if (!item) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center items-center ">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
