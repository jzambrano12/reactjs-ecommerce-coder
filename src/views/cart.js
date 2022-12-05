import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmptyCart from "../assets/images/empty.png";
import { Item } from "../components/Item";
import { Layout } from "../components/Layout";
import { Loading } from "../components/Loading";
import { TrashWidget } from "../components/TrashWidget";
import { CartContext } from "../context/cartContext";

const CartView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { productsAdded, clear, totalAmount } = useContext(CartContext);

  const handleFinalizePurchase = () => {
    setIsLoading(true);
    setTimeout(() => {
      clear();
      setIsLoading(false);
      alert("Compra finalizada");
      navigate("/");
    }, 2000);
  };

  return (
    <Layout>
      <div className="flex flex-col max-w-[50%]">
        {productsAdded.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <img src={EmptyCart} alt="Empty Cart" className="w-44 h-44" />
            <h1 className="text-2xl">No has agregado productos</h1>
            <button
              onClick={() => navigate("/")}
              className="rounded-lg p-2 bg-gray-800 text-white mt-4"
            >
              Ir al Inicio
            </button>
          </div>
        ) : (
          <div>
            <div className="flex gap-4">
              {productsAdded.map((product) => {
                const quantityAdded = product.quantityAdded;

                return (
                  <div className="relative">
                    <Item
                      product={product.item}
                      quantityAdded={quantityAdded}
                    />
                    <TrashWidget itemId={product.item.id} />
                  </div>
                );
              })}
            </div>
            <div className="flex justify-end mt-4">
              {isLoading ? (
                <Loading size="50px" />
              ) : (
                <div className="flex flex-col">
                  <span>Total a pagar: ${totalAmount}</span>
                  <button
                    onClick={handleFinalizePurchase}
                    className="rounded-lg p-2 bg-gray-800 text-white"
                  >
                    Finalizar Compra
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartView;
