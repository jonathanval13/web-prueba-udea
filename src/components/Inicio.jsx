import { Outlet } from "react-router";
import { Buscador } from "./Buscador";

export const Inicio = () => {
  return (
    <>
      <Buscador />
      <Outlet />
    </>
  );
};
