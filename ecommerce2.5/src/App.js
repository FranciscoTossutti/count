import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemListConteiner from './componentes/ItemListConteiner';
import NavBar from './componentes/NavBar';
import Contacto from './componentes/Contacto';
import Cart from './componentes/Cart';
import ItemDetailConteiner from './componentes/ItemDetailConteiner';


function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <h2>Nuestro Catalogo</h2>
      <Routes>
      <Route path='/' element={<ItemListConteiner />}></Route>
        <Route path='/categoria/:categoriaId' element={<ItemListConteiner />}></Route>
        <Route path='/detalle/:DetalleId' element={<ItemDetailConteiner />}></Route>
        <Route path='/contacto' element={<Contacto />}></Route>
        <Route path='/Cart' element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
