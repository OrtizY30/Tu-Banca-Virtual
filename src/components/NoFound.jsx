import { SentimentVeryDissatisfied } from "@mui/icons-material";
import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NoFound = () => {
  return (
    <Container maxWidth={"sm"}>
      <Stack mt={10} alignItems={"center"} justifyContent={"center"}>
        <SentimentVeryDissatisfied sx={{ fontSize: 200 }} />
        <Typography variant="h2" textTransform={"uppercase"} fontWeight={400}>
          Error
        </Typography>
        <Typography variant="h4" textAlign={"center"}>
          Ha ocurrido un error, recarga la pagina o intenta mas tarde
        </Typography>

        <Link to={"/"}>Volver a inicio</Link>
      </Stack>
    </Container>
  );
};

export default NoFound;
