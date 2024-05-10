import {
  AccountCircleOutlined,
  CurrencyExchangeSharp,
  HistorySharp,
  KeyboardArrowDownOutlined,
  Logout,
  MonetizationOnSharp,
  Settings,
} from "@mui/icons-material";
import {
  Button,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import UserProvider from "../../context/UserContext";
import { Link } from "react-router-dom";

const Nav = ({ cerrarSesion, handleTrans }) => {
  const { userInfo } = useContext(UserProvider);

  // Estados y funciones directos de MUI
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <Stack height={"100%"} justifyContent={"space-between"} width={"30%"}>
      <Stack mt={2}>
        <Stack
          gap={3}
          justifyContent={"space-between"}
          direction={"row"}
          alignItems={"center"}
        >
          <Typography textAlign={"right"} color={"white"} fontWeight={600} fontSize={14} >
            Tu Banca Virtual, cuidamos tus ahorros
          </Typography>
              <Button
                sx={{
                  color: "white",
                  width: 190, bgcolor: "#5F4DDF", borderRadius: 4
                }}
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                 <Stack gap={1} direction={"row"} alignItems={"center"} flexGrow={1}>
                  
                <AccountCircleOutlined sx={{ color: "white", fontSize: 30 }} />
                
                {userInfo.name}
                <KeyboardArrowDownOutlined
                  fontSize="large"
                  sx={{ color: "white" }}
                />
              </Stack>
              </Button>
              <Menu
              sx={{ml: .5}}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <MenuItem onClick={handleClose}><Settings sx={{mr:1}}/> Ajuste</MenuItem>
                <MenuItem onClick={() => { handleClose(); cerrarSesion(); }}><Logout sx={{mr:2}}/>Cerrar Sesión</MenuItem>
              </Menu>
           
        </Stack>
      </Stack>
      <Stack justifyContent={"space-between"} direction={"row"} gap={4} mb={2}>
        <Stack alignItems={"center"}>
          <Tooltip title="Transferencia" arrow>
            <Button
              sx={{
                width: 60,
                height: 60,
                bgcolor: "#5F4DDF",
                borderRadius: "50%",
              }}
              variant="contained"
              onClick={handleTrans}
            >
              <CurrencyExchangeSharp sx={{ color: "white", fontSize: 40 }} />
            </Button>
          </Tooltip>
          <Typography color={"white"} fontSize={15} fontWeight={400}>
            Transferencia
          </Typography>
        </Stack>

        <Stack alignItems={"center"}>
          <Link to={"movimientos"}>
            <Button
              variant="contained"
              sx={{
                width: 60,
                height: 60,
                bgcolor: "#5F4DDF",
                borderRadius: "50%",
              }}
            >
              <HistorySharp sx={{ color: "white", fontSize: 40 }} />
            </Button>
          </Link>
          <Typography color={"white"} fontSize={15} fontWeight={400}>
            Moviminetos
          </Typography>
        </Stack>
        <Stack alignItems={"center"}>
          <Button
            variant="contained"
            sx={{
              width: 60,
              height: 60,
              bgcolor: "#5F4DDF",
              borderRadius: "50%",
            }}
          >
            <MonetizationOnSharp sx={{ color: "white", fontSize: 50 }} />
          </Button>

          <Typography color={"white"} fontSize={15} fontWeight={400}>
            Pagar
          </Typography>
        </Stack>
      </Stack>
   
    </Stack>
  );
};

export default Nav;
