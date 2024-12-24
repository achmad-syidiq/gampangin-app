import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./components/pages/DashboardPage";
import CategoryPage from "./components/pages/CategoryPage";
import ProductPage from "./components/pages/ProductPage";
import PosPage from "./components/pages/PosPage";
import RouteScrollToTop from "./helper/RouteScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <Routes>
        <Route exact path="/" element={<DashboardPage />} />
        <Route exact path="/pos" element={<PosPage />} />
        <Route exact path="/categories" element={<CategoryPage />} />
        <Route exact path="/products" element={<ProductPage /> } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
