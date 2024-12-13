import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ProductPage from "./components/pages/ProductPage";
import PurchasePage from "./components/pages/PurchasePage";
import RouteScrollToTop from "./helper/RouteScrollToTop";



function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/products" element={<ProductPage />} />
        <Route exact path="/purchases" element={<PurchasePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



