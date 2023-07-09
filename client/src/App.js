import './App.css';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Store from './pages/store/store.jsx';
import Product from './pages/product/product';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Store />}/>  {/*ruta principal de la tienda*/}  
          <Route path="/producto" element={<Product />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
