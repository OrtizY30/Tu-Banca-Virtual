
import { createContext, useEffect, useState } from "react";

const UserProvider = createContext();

export const UserContext = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [userId, setUserId] = useState("");
  const [saldo, setSaldo] = useState("");
  const [token, setToken] = useState("");
  const [loadingSkeleton, setLoadingSkeleton] = useState(false);

  useEffect(() => {
    getUser();
  }, []);


// Petición que extrae del local storage los datos guardados despues del login
  const getUser = () => {
    // Variables que almacenan el token y el user
    const tokenStore = localStorage.getItem("token");
    const userStore = JSON.parse(localStorage.getItem("user"));

    // De existir datos en el LS actualizamos cada estado correspondiente 
    if (tokenStore && userStore) {
      setToken(tokenStore);
      setUserInfo(userStore);
      setUserId(userStore.id);
      setSaldo(userStore.money);
      console.log(userStore.money);
    }

    if (!userStore) {
      return false;
    }
  };

  return (
    <UserProvider.Provider
      value={{
        setUserInfo,
        userInfo,
        userId,
        setSaldo,
        saldo,
        token,
        setToken,
        setLoadingSkeleton,
        loadingSkeleton
      }}
    >
      {children}
    </UserProvider.Provider>
  );
};

export default UserProvider;
