import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserProvider from "../../context/UserContext";

const LayoutPublic = () => {
  const { userInfo } = useContext(UserProvider);
  return (
    <>
      {/* En caso de un existir un nombre de usuario registrado en el Ls la aplicacion nos mantiente en las secciones publicas y nos protege las rutas privadas */}
      {!userInfo.name ? <Outlet /> 
      : 
      // en caso contrario nos permite navegar por paginas privadas
      <Navigate to={"/user"} />}
    </>
  );
};

export default LayoutPublic;
