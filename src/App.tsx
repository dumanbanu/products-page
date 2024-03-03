import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import HomePage from "./pages/HomePage/Index"
import ProductDetail from "./pages/ProductDetailPage/index"
import ProductsContextProvider from './context/productsContext';
import Layout from './components/layout/Index';

function App() {

  return (
    <ProductsContextProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/detail' element={<ProductDetail />} />
          </Routes>
        </Layout>
      </Router>
    </ProductsContextProvider>
  );
}

export default App;
