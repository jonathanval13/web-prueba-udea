import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import { Atributos } from "./detallesComponentes/Atributos";
import { Imagenes } from "./detallesComponentes/Imagenes";

export const DetallesProducto = () => {
  const { busqueda, id } = useParams();
  const [data, setData] = useState({});
  const {search} = useLocation();  
  const [estadoBusqueda, setEstadoBusqueda] = useState(false);

  const query = new URLSearchParams(search);
  const pagina = parseInt(query.get("n"));
  useEffect(() => {
    traerDatos();
  }, [id]);

  const traerDatos = async () => {
    const ruta = "https://api.mercadolibre.com/items/" + id;
    setTimeout(async () => {
      try {
        const respuesta = await fetch(ruta);
        const datos = await respuesta.json();
        setData(datos);
        setEstadoBusqueda(true);
      } catch (error) {
        setData(datos);
        console.log(error);
      }
    }, 100);
  };
  if (estadoBusqueda) {
    const ruta = "/"+busqueda+"?page="+pagina;
    return (
      <section className="section-producto">
        <div className="c1">
          <p>
            <Link to={ruta}>Volver | </Link>
            {data.condition==="new"?"   Nuevo":"Usado"} - Disponibles {data.available_quantity}
          </p>
          <h1>{data.title}</h1>

          <Imagenes imagenes={data.pictures} /> 
        </div>
        

        <div className="precio-btns">
          <h1 className="d-title">{data.title}</h1>
          <p className="d-precio">$ {data.price.toLocaleString("cop")}</p>
          {data.shipping.free_shipping && <p className="d-envio">Envio gratis</p>}
          <div>
            <button className="btn-comprar">Comprar ahora</button>
            <button  className ="btn-add-carrito">Agregar al carrito</button>
          </div>
          
        </div>
        <Atributos atributos={data.attributes}/>
      </section>
    );
  }
};
