import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.png"

export const Buscador = () => {

  const [estado, setEstado] = useState(false);
  const refs = useRef();
  const {search}= useLocation()
  console.log(search)
  const navegar = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let target = e.target;
    let busqueda = target.busqueda.value;
    if (busqueda !== "") {
      if (!estado) {
        setEstado(true);
        if(search === ""){
          refs.current.className = "img-inicio-ocultar"
        }
        
      }

      const ruta = "/" + busqueda+"?page=1";

      navegar(ruta);
    }
  };

  return (
    <header className="contenedor-buscador">
      
      <form onSubmit={handleSubmit}>
      <a href="/" >
      <img src={logo}alt="" />
      </a>
        <input
          className="input-buscador"
          type="text"
          name="busqueda"
          placeholder="Buscar producto"
          autoComplete="off"
        />
        <input className="button-buscador" type="submit" value="Buscar" />
      </form>
      {search === "" && ( <div className="img-inicio" ref={refs}>
        <img          
          src="https://i.imgur.com/4txQl7t.jpg"
          alt=""
        />
      </div>)}
     
    </header>
  );
};
