import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./assets/all.scss";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
// import Home from "./pages/Home";
import About from "./pages/About";
import IndexBanner from "./pages/index/IndexBanner";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Favorite from "./pages/Favorite";
import SubscriptionForm from "./pages/SubscriptionForm";
import Login from "./pages/member/Login";
import SignUp from "./pages/member/SignUp";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<IndexBanner />}>
          {/* <Route path="/indexBanner" element={<IndexBanner />}></Route> */}
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" component={ProductDetail} />

        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/subscriptionForm" element={<SubscriptionForm />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
