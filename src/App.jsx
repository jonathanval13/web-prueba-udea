import { Routes, Route, BrowserRouter } from "react-router-dom";
import { DetallesProducto } from "./components/DetallesProducto";
import { Inicio } from "./components/Inicio";
import { ListaProductos } from "./components/ListaProductos";
import {Error} from "./components/Error"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}>
          <Route path="/:busqueda" element={<ListaProductos />} />
          <Route path="/:busqueda/:id" element={<DetallesProducto />} />
          <Route path="*" element={<Error/>} />
        </Route>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
