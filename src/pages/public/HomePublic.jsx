import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Fondo from "../../img/fondo.png";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";

const HomePublic = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

// funcion que nos dirige al formulario login
  const handleOpen = () => {
    setOpen(true);

    setTimeout(() => {
      navigate("/login");
      setOpen(false);
    }, 1000);
  };
  return (
    <>
      <Header />

      <Stack bgcolor={"#7AC6F7"} sx={{ m: 0 }}>
        <Container
          maxWidth={"lg"}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Stack width={"50%"} gap={10}>
            <Typography variant="h3" color={"white"}>
              Queremos ayudarte con tus finazas.
            </Typography>

            <Button
              onClick={handleOpen}
              variant="contained"
              sx={{
                width: "240px",
                height: "60px",
                bgcolor: "#5F4DDF",
                fontSize: "25px",
                textTransform: "capitalize",
              }}
            >
              Iniciar Sesión
            </Button>
          </Stack>
          <Stack>
            <Box component={"img"} src={Fondo} alt="Img Fondo" width={500} />
          </Stack>
        </Container>
      </Stack>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default HomePublic;
