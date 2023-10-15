import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import { CartProvider } from './state_management/ContextReducer';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className=' mx-3 bg-slate-300 '>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
