import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ProductPage from "./components/pages/ProductPage";
import RouteScrollToTop from "./helper/RouteScrollToTop";



function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/products" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



