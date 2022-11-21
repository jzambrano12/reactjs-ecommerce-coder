import Item from "./Item";

export const ItemList = ({ products }) => {
  return (
    <ul className="flex items-center justify-center gap-4">
      {products.map((product) => (
        <Item product={product} />
      ))}
    </ul>
  );
};
