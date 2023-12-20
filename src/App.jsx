import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./assets/all.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import IndexBanner from "./pages/index/IndexBanner";
import Products from "./pages/products/Products";
import SubscriptionForm from "./pages/SubscriptionForm";
import Footer from "./components/footer/Footer";

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
        <Route path="/subscriptionForm" element={<SubscriptionForm />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
