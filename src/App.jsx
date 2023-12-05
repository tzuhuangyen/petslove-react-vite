import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/products/Products";
import SubscriptionForm from "./pages/SubscriptionForm";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <div>
        <Header />
        <h1>Yen's project Vite + React</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/subscriptionForm" element={<SubscriptionForm />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
