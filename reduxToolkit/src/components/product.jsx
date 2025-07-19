import { useDispatch } from "react-redux";
import { addCartItem } from "../store/slice/cartReducer";
import { addWishlistItem } from "../store/slice/wishlistReducer";

export default function Product({
  productId,
  id,
  title,
  rating,
  price,
  imageUrl,
}) {
  const dispatch = useDispatch();
  return (
    <div className="product" key={id}>
      <div className="product-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="title-container">
        <h3>
          <a href="#">{title}</a>
        </h3>
      </div>
      <div className="price-rating-container">
        <p className="rating">{rating} ★ ★ ★ ★</p>
        <p className="price">${price}</p>
      </div>
      <div className="cta-container">
        <button onClick={() => dispatch(addCartItem({ productId }))}>
          Add to Cart
        </button>
        <button
          onClick={() => {
            dispatch(addWishlistItem({ title, price, imageUrl, productId }));
          }}>
          Add To Wishlist
        </button>
      </div>
    </div>
  );
}
