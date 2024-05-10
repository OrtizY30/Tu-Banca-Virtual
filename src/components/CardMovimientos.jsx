import { ArrowDownward, ArrowDropDown, ArrowUpward } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import UserProvider from "../context/UserContext";

const CardMovimientos = ({
  idTransaction,
  nameOrigen,
  nameDestino,
  cuentaOrigen,
  cuentaDestino,
  monto
}) => {
  const { userInfo } = useContext(UserProvider);

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ArrowDropDown />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <Stack
          sx={{ width: "100%" }}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack>
            <Typography textTransform={"capitalize"} fontWeight={900} sx={{ color: "gray" }}>
              Origen:
            </Typography>
            {nameOrigen === userInfo.name ? (
              <Typography textTransform={"capitalize"}>{nameOrigen}</Typography>
            ) : (
              <Typography textTransform={"capitalize"}>{nameOrigen}</Typography>
            )}
            <Stack direction={"row"} gap={1}>
              <Typography fontWeight={900}>No. Banca Virtual:</Typography>

              <Typography> ****{cuentaOrigen}</Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} gap={2} alignItems={"center"}>
            <Typography variant="h6" fontWeight={900} sx={{ color: nameOrigen == userInfo.name ? "red" : "green" }}>
              {Number(monto).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </Typography>
            {nameOrigen == userInfo.name ? (
              <ArrowDownward sx={{ color: "red" }} />
            ) : (
              <ArrowUpward sx={{ color: "green" }} />
            )}
          </Stack>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <Stack sx={{ borderTop: "1px solid gray" }}>
          <Typography fontWeight={900} sx={{ color: "gray", mt: 2 }}>
            Destino:
          </Typography>

          {nameOrigen == userInfo.name && (
            <Typography>{nameDestino}</Typography>
          )}
          <Stack direction={"row"} gap={1}>
            <Typography fontWeight={900}>No. Banca Virtual:</Typography>
            <Typography> ****{cuentaDestino}</Typography>
          </Stack>
          <Stack direction={"row"} gap={1}>
            <Typography textTransform={"capitalize"} fontWeight={900}>
              Transacción Nro:
            </Typography>
            <Typography>0098754{idTransaction}</Typography>
          </Stack>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

export default CardMovimientos;
