import "./App.css";
import Product from "./components/product";
import { useSelector } from "react-redux";

function App() {
  const productList = useSelector((state) => state.product);
  return (
    <>
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
