import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useGetItem = () => {
  const [data, setData] = useState(null);
  const { category, id } = useParams();

  // Firebase Methods
  const db = getFirestore();
  const refProps = [db, "items"];
  const ref = id ? doc(...refProps, id) : collection(...refProps);

  useEffect(() => {
    // If we have a category in the browser path
    if (category) {
      const q = query(ref, where("category", "==", category));
      getDocs(q).then((result) =>
        setData(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      );

      return;
    }

    // If we need get only 1 item
    if (id) {
      getDoc(ref)
        .then((item) => {
          if (item.exists()) {
            setData({ id: item.id, ...item.data() });
          }
        })
        .catch((err) => console.error({ err }));
      return;
    }

    // If we need get all items
    getDocs(ref).then((result) =>
      setData(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return data;
};
