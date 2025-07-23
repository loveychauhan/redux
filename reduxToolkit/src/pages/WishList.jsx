import { useSelector } from "react-redux";
import WishlistItem from "../components/WishlistItem";
import { getWishList } from "../store/slice/wishlistReducer";

export default function Cart() {
  const wishListItems = useSelector(getWishList);
  const totalPrice = wishListItems.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div></div>
          <div></div>
          <div className="item-price">Price</div>
        </div>
        {wishListItems?.map(({ productId, title, price, imageUrl }) => (
          <WishlistItem
            key={productId}
            productId={productId}
            title={title}
            price={price}
            imageUrl={imageUrl}
          />
        ))}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          <div className="total">${totalPrice.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}
