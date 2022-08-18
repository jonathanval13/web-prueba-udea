import { useEffect, useState } from "react";

export const Imagenes = ({ imagenes }) => {
 
  const [posImg, setPosImg] = useState(imagenes[0]?.url);

  const handlePasarImagen = (e) => {
    setPosImg(e.target.currentSrc)
  };

  return (
    <div className="slider-imagenes">
      <div className="imgs-mobile">
        {imagenes?.map((imagen) => {
          return (
            <div key={imagen.id}>
              <img src={imagen.url} alt="" />
            </div>
          );
        })}
      </div>
      <div className="imgs">
        <div className="img-estatica">
          <img src={posImg} alt="" />
        </div>
        <div className="carrusel">
        {imagenes?.map((imagen) => {
          return (
            <div key={imagen.id}>
              <img className="imgs-carrusel" src={imagen.url} alt="" onMouseEnter={handlePasarImagen}/>
            </div>
          );
        })}
        </div>
      </div>

      {/*<div>
        
        <div>
          <button className="btn izquierdo" onClick={handlePasarImagen}>
            l
          </button>
          <button className="btn derecho" onClick={handlePasarImagen}>
            d
          </button>
        </div>
      </div>*/}
    </div>
  );
};
