import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateLayout from "../pages/private/PrivateLayout";
import Movimientos from "../pages/private/Movimientos";
import HomePublic from "../pages/public/HomePublic";
import LayoutPublic from "../pages/public/LayoutPublic";
import Login from "../pages/public/Login";
import Home from "../pages/private/Home";
import NoFound from "../components/NoFound";

const Routing = () => {
  // Estados de animaciones de componentes modales y backdrops
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [openBackDrop, setOpenBackdrop] = useState(false);
  return (
    <Routes>
      {/* Rutas publicas que tiene como hijos 2 rutas  */}
      <Route path="/" element={<LayoutPublic />}>
        <Route path="" element={<HomePublic />} />
        <Route path="login" element={<Login />} />
      </Route>
      {/* Ruta user cque contiene 2 rutas hijos */}
      <Route
        path="/user"
        element={
          <PrivateLayout
            openBackDrop={openBackDrop}
            setOpenBackdrop={setOpenBackdrop}
            setAnimarModal={setAnimarModal}
            setModal={setModal}
          />
        }
      >
        <Route
          path=""
          element={
            <Home
              openBackDrop={openBackDrop}
              animarModal={animarModal}
              modal={modal}
              setAnimarModal={setAnimarModal}
              setModal={setModal}
            />
          }
        />
        <Route
          path="movimientos"
          element={
            <Movimientos
              openBackDrop={openBackDrop}
              animarModal={animarModal}
              modal={modal}
              setAnimarModal={setAnimarModal}
              setModal={setModal}
            />
          }
        />
      </Route>
     <Route path="*" element={<NoFound/>}/> 
    </Routes>
  );
};

export default Routing;
