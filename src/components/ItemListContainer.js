import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Own components
import { ItemList } from "./ItemList";
import { Loading } from "./Loading";

// Mock
import { Items } from "../mocks/items.mock";

export const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve) => {
      // Reset the state to show the loading spinner
      setProducts([]);

      // Simulation of a call to an api
      return setTimeout(() => {
        resolve(Items);
      }, 3000);
    }).then((data) => {
      // Execute only in the categories views
      if (category) {
        const categories = data.filter(
          (product) => product.category === category
        );

        // Execute only in the home
        setProducts(categories);
      } else {
        setProducts(data);
      }
    });
  }, [category]);

  if (products.length === 0) {
    return <Loading />;
  }

  return (
    <div className="h-full">
      <ItemList products={products} />
    </div>
  );
};
