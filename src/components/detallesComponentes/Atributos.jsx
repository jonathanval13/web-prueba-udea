import { useEffect, useState } from "react";

export const Atributos = ({ atributos }) => {
  const tam = atributos.length;
  const columnas = [1,2]

  return (
    <div className="contenedor-atributos">
      <h2>Caracteristicas</h2>
      <div>
        {
       
          atributos?.map((atributo, index) => {
            
            return (
                <div className="celdas" key={atributo.id}>
                  <div className="atributo-titulo">{atributo.name}</div>
                  <div className="atributo-valor">{atributo.value_name}</div>
                </div>
          
            );
          })
           
        }
      </div>
    </div>
  );
};
