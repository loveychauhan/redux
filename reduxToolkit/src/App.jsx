import "./App.css";
import Product from "./components/product";
import { useSelector } from "react-redux";
import Search from "./components/Search";

function App() {
  const productList = useSelector((state) => state.product.visibleProducts);
  return (
    <>
      <Search />
      <div className="products-container">
        {productList.map(({ id, title, rating, price, image }) => {
          return (
            <Product
              key={id}
              productId={id}
              title={title}
              rating={rating.rate}
              price={price}
              imageUrl={image}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
