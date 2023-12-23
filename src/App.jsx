import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Header from "./Components/Header/Header";
import Order from "./Pages/Order/Order";
import Products from "./Pages/Products/Products";
import NewProducts from "./Pages/Products/NewProducts/NewProducts";
import Featured from "./Pages/Products/Featured/Featured";
import Mostsold from "./Pages/Products/Mostsold/Mostsold";
import Error from "./Pages/Error/Error";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<Order />} />
          <Route path="/products" element={<Products />}>
            <Route index element={<Mostsold />} />
            <Route path="new-products" element={<NewProducts />} />
            <Route path="featured-products" element={<Featured />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
