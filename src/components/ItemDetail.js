const ItemDetail = ({ item }) => {
  return (
    <div>
      <div>{item.name}</div>
      <img src={item.photo} alt="keyboard" />
    </div>
  );
};

export default ItemDetail;
