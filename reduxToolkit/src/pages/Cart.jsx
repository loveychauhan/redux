import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import {
  getAllCartItems,
  getCartError,
  getCartItemLoading,
} from "../store/slice/cartReducer";

export default function Cart() {
  const cartItems = useSelector(getAllCartItems);

  const totalPrice = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );


  const isLoading = useSelector(getCartItemLoading);
  const error = useSelector(getCartError);

  return (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>

      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        {isLoading ? (
          <h1 style={{ textAlign: "center" }}>Loading...</h1>
        ) : error ? (
          <h1 style={{ textAlign: "center" }}>Error...</h1>
        ) : (
          <>
            {cartItems?.map(({ id, title, rating, price, image, quantity }) => (
              <CartItem
                key={id}
                productId={id}
                title={title}
                price={price}
                quantity={quantity}
                image={image}
                rating={rating}
              />
            ))}
          </>
        )}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          {!isLoading ||
            (error && <div className="total">${totalPrice.toFixed(2)}</div>)}
        </div>
      </div>
    </div>
  );
}
