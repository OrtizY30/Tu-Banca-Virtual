import React, { useContext, useState } from "react";
import Header from "./Header";
import { Navigate, Outlet } from "react-router-dom";
import UserProvider from "../../context/UserContext";

const PrivateLayout = ({
  openBackDrop,
  setOpenBackdrop,
  setModal,
  setAnimarModal,
}) => {
  const { userInfo } = useContext(UserProvider);

  return (
    <>
      {/* en caso de haber un nombre de usuario nos mantiene las rutas publicas ocultadas */}
      {userInfo.name ? (
        <>
          <Header
            setOpenBackdrop={setOpenBackdrop}
            setModal={setModal}
            setAnimarModal={setAnimarModal}
          />
          <Outlet />
        </>
      ) : (
        // En caso contrario nos redirecciona al login
        <Navigate to={"/"} />
      )}
    </>
  );
};

export default PrivateLayout;
