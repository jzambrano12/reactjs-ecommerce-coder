// Firebase

// Own components
import { useGetItem } from "../hooks/useGetItem";
import { ItemList } from "./ItemList";
import { Loading } from "./Loading";

export const ItemListContainer = () => {
  const items = useGetItem();

  if (!items) {
    return <Loading />;
  }

  return (
    <div className="h-full">
      <ItemList products={items} />
    </div>
  );
};
