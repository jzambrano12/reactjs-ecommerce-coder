import { useGetItem } from "../hooks/useGetItem";
import ItemDetail from "./ItemDetail";
import { Loading } from "./Loading";

const ItemDetailContainer = () => {
  const item = useGetItem();

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
