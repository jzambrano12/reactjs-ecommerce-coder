const Item = ({ product }) => {
  return (
    <div>
      <img src={product.img} className="w-20 h-20" alt="Product" />
      <li>{product.name}</li>
    </div>
  );
};

export default Item;
