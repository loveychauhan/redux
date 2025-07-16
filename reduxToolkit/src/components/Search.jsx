import { useDispatch } from "react-redux";
import { searchProduct } from "../store/slice/productReducer";

export default function Search() {
  const dispatch = useDispatch();
  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search here"
        className="search-input"
        onChange={(e) => {
          dispatch(searchProduct(e.target.value));
        }}
      />
    </div>
  );
}
