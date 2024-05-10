import React, { useState } from "react";

const useForm = (inicialState) => {
  //Estado de error que nos permite activar el modo error en los formualrios de mui
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const [state, setState] = useState(inicialState);

  // Funcion para optener valores de los input
  const onChange = ({ target }) => {
    const { name, value } = target;

    // Verificamos que los valores ingresados sean numeros
    if (name === "account" && !value.replace(/[^0-9]/g, "")) {
      setError({
        error: error,
        message: "Digite solo numeros",
      });

      setTimeout(() => {
        setError({
          error: false,
          message: "",
        });
      }, 1500);
    }

    // Nos aseguramos de que el valor introdicido en el campo de monto en transferencia sea un numero y no un string
    const newValue = name === "amount" ? parseInt(value.replace(/[^0-9]/g, "")) : value;

    setState({
      ...state,
      [name]: newValue,
    });
  };

  const resetForm = () => {
    setState(inicialState);
  };

  return {
    state,
    setState,
    onChange,
    resetForm,
    error,
    setError,
  };
};

export default useForm;
