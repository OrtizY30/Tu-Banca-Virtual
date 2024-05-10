import { CheckCircleOutlineSharp } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const ModalExito = ({ setOpen, datosTransferencia }) => {
    // Desestructuracion del objeto
  const { monto, destino, origen, id } = datosTransferencia;

//   Funcion que permite desactivar el modal de transferencia luego de la transferencia fue exitosa
  const handleClick = () => {
    setOpen(false);
    window.location.reload();
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
      <Card sx={{ p: 2, width: 450, bgcolor: "white" }}>
        <CardContent sx={{ mt: -3 }}>
          <Stack direction={"row"} alignItems={"center"} gap={6}>
            <Stack direction={"row"} alignItems={"center"}>
              <Stack
                width={"50px"}
                height={"50px"}
                alignItems={"center"}
                justifyContent={"center"}
                sx={{ bgcolor: "#6A80F7", borderRadius: 3, p: 1 }}
              >
                <Typography
                  variant="h5"
                  textTransform={"capitalize"}
                  textAlign={"center"}
                  fontWeight={900}
                  color={"white"}
                >
                  Bv
                </Typography>
              </Stack>
              <Typography
                fontWeight={460}
                variant="h6"
                color={"#6A80F7"}
                sx={{ ml: 1 }}
              >
                Banca Virtual
              </Typography>
            </Stack>
            <Stack sx={{ width: 40 }} direction={"row"} alignItems={"center"}>
              <Typography
                sx={{ color: "#4FEA3C" }}
                textAlign={"center"}
                textTransform={"uppercase"}
              >
                Transación exitosa
              </Typography>
              <CheckCircleOutlineSharp
                sx={{ color: "#4FEA3C", fontSize: 80 }}
              />
            </Stack>
          </Stack>
        </CardContent>
        <CardContent sx={{ borderBottom: "1px solid gray", mt: -2 }}>
          <Typography variant="h6" fontWeight={900} sx={{ color: "#2DC407" }}>
            Transferiste
          </Typography>
          <Typography variant="h6" fontWeight={900} sx={{ color: "#2DC407" }}>
            {Number(monto).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </Typography>
        </CardContent>
        <CardContent sx={{ borderBottom: "1px solid gray" }}>
          <Typography
            textTransform={"capitalize"}
            fontWeight={400}
            sx={{ color: "gray" }}
          >
            Destino:
          </Typography>

          <Stack direction={"row"} gap={1} mt={1}>
            <Typography textTransform={"capitalize"} fontWeight={900}>
              Cta. Banca Virtual:
            </Typography>

            <Typography> ****{destino}</Typography>
          </Stack>
        </CardContent>

        <CardContent sx={{ borderBottom: "1px solid gray" }}>
          <Typography
            textTransform={"capitalize"}
            fontWeight={400}
            sx={{ color: "gray" }}
          >
            Origen:
          </Typography>
          <Stack direction={"row"} gap={1} mt={1}>
            <Typography textTransform={"capitalize"} fontWeight={900}>
              Cta. Banca Virtual:
            </Typography>

            <Typography> ****{origen}</Typography>
          </Stack>
        </CardContent>

        <CardContent sx={{ borderBottom: "1px solid gray", mb: 3 }}>
          <Stack gap={1}>
            <Typography
              textTransform={"capitalize"}
              fontWeight={400}
              sx={{ color: "gray" }}
            >
              Numero de Transacción:
            </Typography>
            <Typography fontWeight={900}>0098754{id}</Typography>
          </Stack>
        </CardContent>
        <Stack>
          <Button variant="contained" color="success" onClick={handleClick}>
            listo
          </Button>
        </Stack>
      </Card>
    </Container>
  );
};

export default ModalExito;
