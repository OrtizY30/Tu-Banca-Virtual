import { AppBar, Box, Button, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import UserProvider from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import Nav from "./Nav";

const Header = ({ setOpenBackdrop, setModal, setAnimarModal }) => {
  const navigate = useNavigate();
  const { userInfo } = useContext(UserProvider);

  // Funcion para cerrar sesión
  const cerrarSesion = () => {
    // Activa el componente backdrop
    setOpenBackdrop(true);

    // Y para terminar el limpiamos el localStorage 
    localStorage.clear();

    setTimeout(() => {
      // redireccionamos la aplicacion a la pagina principal
      navigate("/");
      
      // recargamos la página
      window.location.reload();

      // Desactivamos el BackDrop del loading
      setOpenBackdrop(false);
    }, 1000);
  };

  // Funcionpara que activa el modal para transferencias, se lo pasamos mediante props al componente de nav
  const handleTrans = () => {

    setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };
  return (
    <Stack  maxWidth={"100%"}  height={200} sx={{ bgcolor: "#6A80F7" }}>
      <Stack
        maxWidth={"lg"}
        m={"0 auto"}
        height={"100%"}
        alignItems={"center"}
        direction={"row"}
        justifyContent={"space-between"}
        width={"100%"}
      >
        <Stack
          height={"100%"}
          direction={"column"}
          justifyContent={"space-between"}
        >
          <Stack direction={"row"} alignItems={"center"} mt={2}>
            <Box
              width={"60px"}
              height={"60px"}
              sx={{ bgcolor: "white", borderRadius: 4, p: 1 }}
            >
              <Link to={"/user"} style={{ textDecoration: "none" }}>
                <Typography
                  variant="h4"
                  textTransform={"capitalize"}
                  textAlign={"center"}
                  fontWeight={900}
                  color={"#6A80F7"}
                >
                  Bv
                </Typography>
              </Link>
            </Box>
            <Typography
              fontWeight={460}
              variant="h4"
              color={"white"}
              sx={{ ml: 1 }}
            >
              Banca Virtual
            </Typography>
          </Stack>

          <Typography
            variant="h5"
            fontWeight={900}
            sx={{ mb: 2, color: "white" }}
          >
            ¡Hola{" "}
            <span style={{ textTransform: "capitalize" }}>
              {" "}
              {userInfo.name}
            </span>
            , bienvenido a tu banca virtual!
          </Typography>
        </Stack>

        <Nav handleTrans={handleTrans} cerrarSesion={cerrarSesion} />
      </Stack>
    </Stack>
  );
};

export default Header;
