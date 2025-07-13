import { TbJewishStarFilled } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const cartItems = useSelector((state) => state.cartItems);
  const wishListItems = useSelector((state) => state.wishlist);

  const headerCartCount = cartItems.reduce((prev, curr) => {
    return prev + curr.quantity;
  }, 0);

  const headerWishlistCount = wishListItems.length;
  
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
