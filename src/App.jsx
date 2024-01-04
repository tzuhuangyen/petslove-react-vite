import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/all.scss";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./pages/Home";
import Index from "./pages/index/Index";
import Products from "./pages/products/Products";
import SubscriptionForm from "./pages/SubscriptionForm";
import Footer from "./components/footer/Footer";
// import Register from "./pages/logSignin/Register";
import Login from "./pages/logSignin/LoginForm";
import Blog from "./pages/Blog";
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Index />}>
          {/* <Route path="/indexBanner" element={<IndexBanner />}></Route> */}
        </Route>

        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/subscriptionForm" element={<SubscriptionForm />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
