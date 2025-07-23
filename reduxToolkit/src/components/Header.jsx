import { TbJewishStarFilled } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addProducts,
  errorReducer,
  loadingReducer,
} from "../store/slice/productReducer";
import {
  fetchCartItemFromApi,
} from "../store/slice/cartReducer";
import { useEffect } from "react";

export default function Header() {
  const wishListItems = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const headerWishlistCount = wishListItems.length;

  useEffect(() => {
    dispatch({
      type: "api/makeCall",
      payload: {
        url: "products",
        onStart: loadingReducer.type,
        onSuccess: addProducts.type,
        onError: errorReducer.type,
      },
    });
    // dispatch({
    //   type: "api/makeCall",
    //   payload: {
    //     url: "carts/5",
    //     onStart: fetchCartItems.type,
    //     onSuccess: loadCartItems.type,
    //     onError: fetchCartItemsError.type,
    //   },
    // });
    // dispatch(loadingReducer());

    //   fetch("https://fakestoreapi.com/products")
    //     .then((res) => res.json())
    //     .then((data) => {
    //       dispatch(addProducts(data));
    //     })
    //     .catch(() => {
    //       dispatch(errorReducer());
    //     });

    dispatch(() => fetchCartItemFromApi(dispatch));
  }, []);

  const cartItems = useSelector((state) => state.cartItems.list);
  const headerCartCount = cartItems?.reduce((prev, curr) => {
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
