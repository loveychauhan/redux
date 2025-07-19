import { TbJewishStarFilled } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addProducts,
  errorReducer,
  loadingReducer,
} from "../store/slice/productReducer";
import { loadCartItems } from "../store/slice/cartReducer";
import { useEffect } from "react";

export default function Header() {
  const wishListItems = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const headerWishlistCount = wishListItems.length;

  useEffect(() => {
    dispatch(loadingReducer());
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          dispatch(addProducts(data));
        })
        .catch(() => {
          dispatch(errorReducer());
        });
    }, 0);

    fetch("https://fakestoreapi.com/carts/5")
      .then((res) => res.json())
      .then((data) => dispatch(loadCartItems(data)));
  }, []);

  const cartItems = useSelector((state) => state.cartItems);
  const headerCartCount = cartItems.reduce((prev, curr) => {
    return prev + curr.quantity;
  }, 0);

  return (
    <header>
      <nav className="header-contents">
        <Link to="/">
          <h1>Shop</h1>
        </Link>

        <div className="cartAndWishlist cart-Content">
          <Link to="/cart" className="cart-Content">
            <p>{headerCartCount}</p>
            <TiShoppingCart />
          </Link>
          <Link to="/wishlist" className="cart-Content">
            <p>{headerWishlistCount}</p>
            <TbJewishStarFilled />
          </Link>
        </div>
      </nav>
    </header>
  );
}
