import { Box, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

const MensajeAlert = ({ tipo, mensaje }) => {
  return <Box bgcolor={red} color={tipo}><Typography fontWeight={400} textTransform={'uppercase'} variant="h6" textAlign={"center"} sx={{color: red}}>{mensaje}</Typography></Box>;
};

export default MensajeAlert;
