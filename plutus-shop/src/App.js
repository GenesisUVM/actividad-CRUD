import './App.css'
import Compras from './componentes/compras';
import Ventas from './componentes/ventas';
import NavBar from './componentes/nav-bar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='./ventas' element={<Ventas />} />
          <Route path='./compras' element={<Compras />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
