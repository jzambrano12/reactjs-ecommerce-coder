import { useNavigate } from "react-router-dom";
import { useGetItemImg } from "../hooks/useGetItemImg";
import { Loading } from "./Loading";

export const Item = ({ product, quantityAdded }) => {
  const navigate = useNavigate();
  const img = useGetItemImg(product.img);

  const description = product.description.slice(0, 30);
  const title = product.name.slice(0, 20);

  function handleNavigate() {
    navigate(`/item/${product.id}`);
  }

  if (!img) {
    return <Loading />;
  }

  return (
    <div
      onClick={handleNavigate}
      className="flex flex-col w-[200px] h-[350px] bg-white rounded p-4 shadow cursor-pointer transition-all hover:shadow-lg"
    >
      <div className="flex flex-col flex-1">
        <img
          src={img}
          className="w-full h-[100px] object-cover mb-2"
          alt="Product"
        />
        <span className="text-2xl font-bold">
          {product.name.length > 20 ? `${title} ...` : product.name}
        </span>
        <hr className="mb-2" />
        <p className="mb-2">
          {product.description.length > 30
            ? `${description} ...`
            : product.description}
        </p>
      </div>
      <div className="flex flex-col">
        <hr className="mb-2" />
        <div className="flex justify-between items-center">
          <span className="font-bold">${product.price}</span>
          <span className="text-xs">
            {quantityAdded ? "Agregados" : "En Stock"}:{" "}
            {quantityAdded || product.stock}
          </span>
        </div>
      </div>
    </div>
  );
};
