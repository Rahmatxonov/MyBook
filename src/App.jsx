import "./index.css";
import Home from "./pages/HomePage/Home";
// import Explorer from "./pages/CheckoutPage/Checkout";
import Shop from "./pages/ShopPage/Shop";
import Blog from "./pages/BlogPage/Blog";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explorer" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
