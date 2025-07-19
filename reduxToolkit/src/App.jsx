import "./App.css";
import Product from "./components/product";
import { useDispatch, useSelector } from "react-redux";
import Search from "./components/Search";

function App() {
  const { visibleProducts, isloading, isError } = useSelector(
    (state) => state.product
  );

  return (
    <>
      <Search />
      {isloading ? (
        <h1 style={{ textAlign: "center" }}>Loading...</h1>
      ) : isError ? (
        <h1 style={{ textAlign: "center" }}>Error...</h1>
      ) : (
        <div className="products-container">
          {visibleProducts.map(({ id, title, rating, price, image }) => {
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
      )}
    </>
  );
}

export default App;
