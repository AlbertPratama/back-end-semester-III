import {BrowserRouter, Routes, Route} from "react-router-dom";
import { ShopContextProvider } from './component/shop-context.jsx';
import { ThemeProvider } from './component/theme-context.js';
import ProductList from "./component/ProductList.js";
import AddProduct from "./component/AddProduct.js";
import EditProduct from "./component/EditProduct.js";
import Cart from "./component/cart.jsx";
import { Navbar } from "./component/navbar.jsx"

function App() {
  return (
    <BrowserRouter>
      <ShopContextProvider>
        <ThemeProvider> 
          <Navbar />
            <Routes>
                <Route path="/" element={<ProductList/>}/>
                <Route path="add" element={<AddProduct/>}/>
                <Route path="edit/:id" element={<EditProduct/>}/>
                <Route path="cart" element={<Cart/>}/>        
            </Routes>
        </ThemeProvider>
      </ShopContextProvider>
    </BrowserRouter>
  );
}

export default App;
