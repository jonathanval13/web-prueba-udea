//import { PropTypes } from "prop-types"
import { Link} from "react-router-dom";
export const Producto = ({ datos,busqueda,pagina }) => {


  const data = {
    id: datos.id,
    titulo: datos.title,
    precio: datos.price,
    cantidad_disponible: datos.available_quantity,
    condicion: datos.condition,
    envio: datos.shipping,
    imagen: datos.thumbnail
  };

  const rutaProducto = "/"+busqueda+"/"+data.id+"?n="+pagina;   

  return (
    <Link className="tarjeta-producto" to={rutaProducto}>
      <div className="contenedor-img">
        <img className="img-producto" src={data.imagen.replace("I.jpg","O.jpg")}/>
      </div>  
      <div className="contenedor-informacion"> 
        <h3 className="titulo-producto">{data.titulo}</h3>
        <p className="p-precio">$ {data.precio.toLocaleString("cop")}</p>   
        {data.envio.free_shipping && <p className="p-envio">Envio gratis</p>}
        <p className="p-disponibilidad">Disponibles {data.cantidad_disponible}</p>
        <p>{data.condicion ==="new"?"Nuevo":"Usado"}</p> 
      </div>
      
    </Link>
  );
};
