import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <>
      <form
        action="#"
        style={{ border: "1px solid #000", padding: "20px", margin: "20px" }}
      >
        <input type="text" placeholder="search products" />
        <button>Search</button>
      </form>
      <nav style={{ padding: "10px 20px", background: "#898989" }}>
        {/* <Link to="">Most Sold Products</Link> */}
        <Link to="featured-products" style={{ marginLeft: "10px" }}>
          Featured Products
        </Link>
        <Link to="new-products" style={{ marginLeft: "10px" }}>
          New Products
        </Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Products;
