import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";
import { Layout } from "../components/Layout";

const CategoryView = () => {
  const { category } = useParams();
  // const categories = item.filter((product) => product.category === category);

  return (
    <Layout>
      <ItemListContainer />
    </Layout>
  );
};

export default CategoryView;
