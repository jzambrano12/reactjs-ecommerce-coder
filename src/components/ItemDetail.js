const ItemDetail = ({ item }) => {
  return (
    <div>
      <div>{item.name}</div>
      <img src={item.img} alt="keyboard" />
    </div>
  );
};

export default ItemDetail;
