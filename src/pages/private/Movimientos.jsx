import React from "react";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import UserProvider from "../../context/UserContext";

import ModalTrans from "../../components/ModalTrans";
import { Backdrop, CircularProgress, Container, Skeleton } from "@mui/material";
import CardMovimientos from "../../components/CardMovimientos";
import SakeletonMovimientos from "../../components/skeletons/SakeletonMovimientos";

const Movimientos = ({
  openBackDrop,
  setModal,
  modal,
  animarModal,
  setAnimarModal,
}) => {
  const { userInfo, loadingSkeleton, setLoadingSkeleton } = useContext(UserProvider);
  const [movimientos, setMovimientos] = useState([]);

  useEffect(() => {
    getMovimientos(userInfo.id);
  }, []);

  useEffect(() => {
    setLoadingSkeleton(true);
  }, []);

  // Peticion al backen de los movimientos bancarios
  const getMovimientos = async (id) => {
    try {
      const request = await axios.get(
        "https://apibank.ikoodi.site/api/movements/" + id
      );
      const { data } = request;

      if (data.length > 0) {
        setMovimientos(data);
        setTimeout(() => {
          setLoadingSkeleton(false);
        }, 1000);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container
        maxWidth={"sm"}
        sx={{ display: "flex", flexDirection: "column-reverse", gap: 2, mt: 5 }} >
        {loadingSkeleton
          ? Array.from(new Array(4)).map((item, index) => (
              <SakeletonMovimientos key={index} />
            ))
          : movimientos
              .slice(-10)
              .map((movimiento) => (
                <CardMovimientos
                  key={movimiento.id_transaction}
                  idTransaction={movimiento.id_transaction}
                  nameOrigen={movimiento.name_user_send}
                  nameDestino={movimiento.name_user_recive}
                  cuentaOrigen={movimiento.account_usuario_send}
                  cuentaDestino={movimiento.account_usuario_recive}
                  monto={movimiento.amount}
                />
              ))}
      </Container>

{/* Codigo que muestra el modal paras las transferencias */}
      {modal && (
        <ModalTrans
          setModal={setModal}
          setAnimarModal={setAnimarModal}
          animarModal={animarModal}
        />
      )}

{/* componente del backdrop de loading */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackDrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default Movimientos;
