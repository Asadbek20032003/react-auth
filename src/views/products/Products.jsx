import ProductList from "./ProductList";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      {/*filter*/}
      <Link to="/products/create" className="btn btn-primary">
        Add
      </Link>
      <ProductList />
    </div>
  );
};

export default Products;
