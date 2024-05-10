import { AttachMoney, Close, Person } from "@mui/icons-material";
import {
  Backdrop,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import useForm from "../hooks/useForm";
import UserProvider from "../context/UserContext";
import axios from "axios";
import { LoadingButton } from "@mui/lab";
import ModalExito from "./ModalExito";

const ModalTrans = ({ animarModal, setAnimarModal, setModal }) => {
  const { userInfo, setSaldo, token } = useContext(UserProvider);
  const [open, setOpen] = useState(false);
  const [openBackDrop, setOpenBackdrop] = useState(false);
  const [datosTransferencia, setDatosTransferencia] = useState({});

  // Hook useForm, el cual recibe como parametro un objeto con un patron establecido, el cual será enviado mediante la petición POSt en la api
  const { state, onChange, error, seTError } = useForm({
    amount: "",
    token: token,
    account_recive: "",
    id: userInfo.id,
  });

  // Funcion que permite transferir y hace la petecion al backen 
  const Transferir = async (e) => {
    e.preventDefault();

    // Verificamos que los campos esten llenos
    if (state.amount === "" || state.account_recive === "") return;

    // De estar toto bien activamos en backDrop de loading
    setOpenBackdrop(true)
  
    try {
      const request = await axios.post(
        "https://apibank.ikoodi.site/api/movements/",
        state
      );
      const { data } = request;

      // estraemos el objeto user del localStorage para actualizar el valor del saldo del usuario
      const newObjeto =  JSON.parse(localStorage.getItem('user'))
      newObjeto.money = data.new_money;
      localStorage.setItem('user', JSON.stringify(newObjeto));

      setSaldo(data.new_money);

      setDatosTransferencia({
        monto: state.amount,
        destino: state.account_recive,
        origen: userInfo.account,
        idTransaccion: "0098754" + userInfo.id,
      });
    

     
    } catch (err) {
      console.log(err.message);
      setTimeout(() => {
        setOpenBackdrop(false)
        
      }, 1500);
    } finally {
      setTimeout(() => {
        setOpenBackdrop(false)
        setOpen(true);
      }, 1500);
    }

   
  };

  const ocultarModal = () => {
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };
  return (
    <Container
      maxWidth="xl"
      sx={{
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        bgcolor: "rgba(255, 255, 255, 0.62)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          display: open && 'none',
          borderRadius: 10,
          width: 600,
          m: "",
          p: 3,
          position: "relative",
          opacity: animarModal ? 1 : 0,
          transition: "all 300ms ease-in-out",
          bgcolor: "#6A80F7",
        }}
      >
        <CardContent>
          <Typography
            textTransform={"uppercase"}
            fontWeight={900}
            textAlign={"center"}
            variant="h5"
            error={error.error}
          >
            Ingrega el numero de cuenta
          </Typography>
        </CardContent>
        <Box
        
          component={"form"}
          p={2}
          display={'flex'}
          flexDirection={"column"}
          gap={4}
          alignItems={"center"}
          onSubmit={Transferir}
        >
          <Stack
            width={"100%"}
            gap={1}
            flexDirection={"row"}
            alignItems={"center"}
          >
            <Person sx={{ color: "white" }} fontSize="large" />

            <TextField
              sx={{ bgcolor: "white", color: "inherit" }}
              variant="outlined"
              type="text"
              name="account_recive"
              label="Nro. de Cuenta"
              fullWidth
              // error={error.error}
              value={state.account_recive.replace(/[^0-9]/g, "")}
              onChange={onChange}
            />
          </Stack>

          <Stack
            width={"100%"}
            gap={1}
            flexDirection={"row"}
            alignItems={"center"}
          >
            <AttachMoney sx={{ color: "white" }} fontSize="large" />

            <TextField
              sx={{ bgcolor: "white", color: "inherit" }}
              variant="outlined"
              type="text"
              name="amount"
              label="Digite en monto a enviar"
              fullWidth
              //   error={error.error}
              //   value={state.amount.replace(/[^0-9]/g, "")}
              value={state.amount}
              onChange={onChange}
            />
          </Stack>
          <Stack alignItems={"center"}>
            <LoadingButton
              type="submit"
              variant="contained"
              sx={{ bgcolor: "#5F4DDF" }}
            >
              TRANSFERIR
            </LoadingButton>
          </Stack>
        </Box>

        <Box sx={{ position: "absolute", top: -1, right: -20 }}>
          <Button variant="contained" color="error" onClick={ocultarModal}>
            <Close sx={{ mr: 3, textAlign: "left" }} />
          </Button>
        </Box>
      </Card>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackDrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      {open && (
        <ModalExito datosTransferencia={datosTransferencia} setOpen={setOpen} />
      )}
    </Container>
  );
};

export default ModalTrans;
