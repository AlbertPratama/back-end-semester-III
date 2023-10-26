import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductList from "./component/ProductList.js";
import AddProduct from "./component/AddProduct.js";
import EditProduct from "./component/EditProduct.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="add" element={<AddProduct/>}/>
        <Route path="edit/:id" element={<EditProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;