import { useDispatch } from "react-redux";
import { removeWishlistItem } from "../store/slice/wishlistReducer";

export default function WishlistItem({ productId, title, price, imageUrl }) {
  const dispatch = useDispatch();
  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
        </div>
      </div>
      <div></div>
      <div className="item-quantity">
        <button onClick={() => dispatch(removeWishlistItem({ productId }))}>
          Remove Item
        </button>
      </div>
      <div className="item-price">${price}</div>
    </div>
  );
}
