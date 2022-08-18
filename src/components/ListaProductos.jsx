import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import { Producto } from "./Producto";
//import { Producto } from "./Producto";

export const ListaProductos = () => {
  const [productos, setProductos] = useState([]);
  const [paginacion, setPaginacion] = useState({});
  const [errores, setErrores] = useState(false);
  const { search } = useLocation();
  const { busqueda } = useParams();
  const limit = 10;
  const query = new URLSearchParams(search);
  const pagina = parseInt(query.get("page"));

  useEffect(() => {
    obtenerDatos();
  }, [busqueda]);

  const obtenerDatos = async () => {
    const ruta =
      "https://api.mercadolibre.com/sites/MCO/search?q=" +
      busqueda +
      "&offset=" +
      (pagina ? pagina - 1 : 0) * limit +
      "&limit=" +
      limit;
    try {
      const respuesta = await fetch(ruta);
      const datos = await respuesta.json();
      if (datos.results) {
        setProductos(datos.results);
        setPaginacion(datos.paging);
      } else {
        setErrores(true);
      }
    } catch (error) {
      console.log(error);
      setErrores(true);
    }
  };
  if (errores) {
    return (
      <div className="errores">
        <a href={"/" + busqueda + "?page=1"}>Volver</a>
        <p>Pagina no encontrada</p>
      </div>
    );
  } else {
    return (
      <>
        <section className="listaProductos">
          {productos.map((producto) => {
            return (
              <Producto
                key={producto.id}
                datos={producto}
                busqueda={busqueda}
                pagina={pagina}
              />
            );
          })}
        </section>
        <div className="pasar-pagina">
          {pagina > 1 && (
            <a href={"/" + busqueda + "?page=" + (pagina - 1)}>Anterior</a>
          )}
          <p>
            {pagina} de {Math.ceil(paginacion.primary_results / limit)}
          </p>
          {pagina <= Math.ceil(paginacion.primary_results / limit) && (
            <a href={"/" + busqueda + "?page=" + (pagina + 1)}>Siguiente</a>
          )}
        </div>
      </>
    );
  }
};
