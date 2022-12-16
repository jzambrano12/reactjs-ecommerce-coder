import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Firebase
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

// Own components
import { ItemList } from "./ItemList";
import { Loading } from "./Loading";

export const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Verify if we are searching by category
    // else get all the items from Firestore

    if (!category) {
      const db = getFirestore();

      const itemsCollection = collection(db, "items");
      getDocs(itemsCollection).then((result) =>
        setProducts(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      );
    } else {
      const db = getFirestore();

      const q = query(
        collection(db, "items"),
        where("category", "==", category)
      );
      getDocs(q).then((result) =>
        setProducts(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      );
    }
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
