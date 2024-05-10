import {
  AccountBalanceOutlined,
  CheckCircleRounded,
  Key,
  Person,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Alert,
  Backdrop,
  Box,
  CircularProgress,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import useForm from "../../hooks/useForm";
import axios from "axios";
import MensajeAlert from "../../components/MensajeAlert";
import UserProvider from "../../context/UserContext";
import { enqueueSnackbar } from "notistack";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {setSaldo, setUserInfo, setToken } = useContext(UserProvider);
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const [openBackDrop, setOpenBackdrop] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // Hook de useForm que recibe como parametro un objeto con datos que madaremos en la peticion de la api
  const { state, onChange, setError, error } = useForm({
    account: "40705",
    password: "40705User1",
  });

  // Función que permiter al usuario loguearse y al almacenar los datos en el LS
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Activamos el Backdrop de loadin
    setOpenBackdrop(true);
    
    // verificamos que todos los campos esten llenos
    if (state.account === "" || state.password === "") {

      // De faltar algun campo manamos una alerta de error
      enqueueSnackbar("Error, todos los campos son obligatorios", {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
     

      setTimeout(() => {
        setError({
          error: false,
          message: "",
        });
        setOpenBackdrop(false);
      }, 3000);

      return false;
    }

    // De estar todo en orden seguimos con la peticion a la api 
    try {
      const response = await axios.post(
        "https://apibank.ikoodi.site/api/login",
        state
      );

      const { data } = response;

      // verificamos
      if (data.user) {
        setUserInfo(data.user);
        setToken(data.token);
        setSaldo(data.user.money)
      }

      // Guardamos datos en el LS
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", JSON.stringify(data.token));

      setOpen(true);

    } catch (err) {
      setError({
        error: true,
        message: err.message,
      });

      <Navigate to={'/error'}/>
      navigate('/*')
      window.location.reload();
    } finally {
      setError({
        error: false,
        message: "",
      });
    }

    // Luego de 1 segundo redireccionamos la pagina
    setTimeout(() => {
      navigate("/user");
      setOpenBackdrop(false);
    }, 1000);
  };

  return (
    <Stack
      justifyContent={"center"}
      height={"100vh"}
      alignItems={"center"}
      sx={{ bgcolor: "rgb(57, 51, 51)" }}
    >
      <Box>
        <AccountBalanceOutlined sx={{ color: "white", fontSize: 200 }} />
      </Box>
      <Typography
        sx={{ color: "white", mt: -2 }}
        variant="h1"
        textAlign={"center"}
        fontWeight={"900"}
        letterSpacing={10}
      >
        Banca Virtual
      </Typography>

      {error.error && (
        <MensajeAlert tipo={'red'} mensaje={error.message}>
          {error.message}
        </MensajeAlert>
      )}
      {error.error && (
        <Snackbar
          open={open}
          message="hola a todos"
          autoHideDuration={1000}
          onClose={() => setOpen(false)}
        >
          <Alert
            variant="filled"
            severity="success"
            icon={<CheckCircleRounded />}
          >
            This is a success Alert.
          </Alert>
        </Snackbar>
      )}

      <Box
        mt={5}
        display={"grid"}
        gap={1}
        component={"form"}
        onSubmit={handleSubmit}
      >
        <Box display={"grid"} gap={3} width={500}>
          <Box
            display={"flex"}
            gap={1}
            alignItems={"center"}
            sx={{
              bgcolor: "#1969A6",
              pl: 1,
              borderRadius: 4,
              height: "50px",
              overflow: "hidden",
            }}
          >
            <Person sx={{ color: "white" }} fontSize="large" />

            <TextField
              variant="outlined"
              type="text"
              name="account"
              label="Account"
              fullWidth
              error={error.error}
              onChange={onChange}
              value={state.account.replace(/[^0-9]/g, "")}
              sx={{
                border: 'none'
              }}
            />
          </Box>
          <Box
            display={"flex"}
            gap={1}
            alignItems={"center"}
            sx={{
              bgcolor: "#1969A6",
              pl: 1,
              borderRadius: 4,
              height: "50px",
              overflow: "hidden",
            }}
          >
            <Key sx={{ color: "white" }} fontSize="large" />
            <FormControl
              fullWidth
              onChange={onChange}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                autoComplete="off"
                error={error.error}
                name="password"
                id="outlined-adornment-password"
                // value={'40705User1'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Box>

          <LoadingButton
            loadingIndicator={<CircularProgress size={20} />}
            sx={{
              fontSize: 20,
              m: "0 auto",
              p: 1,
              borderRadius: 4,
              bgcolor: "#17C8C2",
              width: 170,
              textTransform: "capitalize",
            }}
            type="submit"
            variant="contained"
          >
            Iniciar Sesión
          </LoadingButton>
        </Box>
      </Box>

      {/* componente del backdrop de loading */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackDrop}
      >
        <CircularProgress  color="inherit" />
      </Backdrop>
    </Stack>
  );
};

export default Login;
