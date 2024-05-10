import {
  Backdrop,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import UserProvider from "../../context/UserContext";
import ModalTrans from "../../components/ModalTrans";
import { CreditCardSharp } from "@mui/icons-material";
import { enqueueSnackbar } from "notistack";
import { Link } from "react-router-dom";
import SkeletonHome from "../../components/skeletons/SkeletonHome";

const Home = ({
  openBackDrop,
  setModal,
  modal,
  animarModal,
  setAnimarModal,
}) => {
  const {userInfo, saldo, loadingSkeleton, setLoadingSkeleton } = useContext(UserProvider);
    
  // Mediante un useefect activamos una alerta de bienvenida al usuario
  useEffect(() => {
    enqueueSnackbar(
      <Card sx={{ bgcolor: "green" }}>
        <CardContent>
          <Typography
            letterSpacing={1}
            fontWeight={900}
            sx={{ fontSize: 15, color: "white" }}
          >
            Hola{" "}
            <span style={{ textTransform: "capitalize" }}>
              {" "}
              {userInfo.name}
            </span>
            , Bienvenido a tu Banca Virtual, tu banca de confianza.
          </Typography>
        </CardContent>
      </Card>,
      {
        variant: "success",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right",
        },
      }
    );
  }, []);

  // animacion que permite apreciar los componentes de skeleton
  useEffect(() => {
    setLoadingSkeleton(true);
    
    setTimeout(() => {
      setLoadingSkeleton(false);
    }, 2000);
  }, []);

  return (
    <Container sx={{ height: "60vh", mt: 4 }} maxWidth="lg">
      <Stack>
        <Typography ml={5} mb={1} variant="h5" sx={{ color: "gray" }}>
          Tu producto
        </Typography>
        {loadingSkeleton ? (
          <SkeletonHome />
        ) : (
          <Card
            sx={{
              width: 500,
              pl: 3,
              pr: 3,
              transition: "all 300ms ease-in-out",
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
          >
            <CardContent sx={{ borderBottom: "2px solid gray" }}>
              <Stack direction={"row"} gap={2}>
                <CreditCardSharp sx={{ color: "#6A80F7", fontSize: 70 }} />
                <Stack>
                  <Typography
                    variant="h6"
                    fontWeight={500}
                    textTransform={"capitalize"}
                    sx={{ color: "black" }}
                  >
                    Cuenta Banca Virtual No.
                  </Typography>
                  <Typography
                    letterSpacing={3}
                    variant="h6"
                    fontWeight={400}
                    sx={{ color: "gray" }}
                  >
                    *****{userInfo.account}
                  </Typography>
                </Stack>
              </Stack>
              <Typography
                mt={1}
                letterSpacing={2}
                variant="h3"
                fontWeight={500}
                sx={{ color: "#6A80F7" }}
              >
                {Number(saldo).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
                
              </Typography>

              <Typography ml={1} fontWeight={500}>
                Saldo disponible
              </Typography>
            </CardContent>
            <Link to={"movimientos"} style={{ textDecoration: "none" }}>
              <Stack>
                <Button
                  variant="text"
                  sx={{ p: 2, color: "#6A80F7", fontSize: 20 }}
                >
                  Ver movimientos
                </Button>
              </Stack>
            </Link>
          </Card>
        )}
      </Stack>


      {modal && (
        <ModalTrans
          setModal={setModal}
          setAnimarModal={setAnimarModal}
          animarModal={animarModal}
        />
      )}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackDrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
};

export default Home;
