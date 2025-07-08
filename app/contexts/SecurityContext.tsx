import { createContext, useState } from "react";

interface SecurityProps {
  Logout: () => void;
  auth: any;
}

const initContextData = {
  Logout: () => {},
  auth: null,
};

export const SecurityContext = createContext<SecurityProps>(initContextData);

const SecurityContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const Logout = () => {};

  return (
    <SecurityContext.Provider
      value={{
        Logout,
        auth,
      }}
    >
      {children}
    </SecurityContext.Provider>
  );
};

export default SecurityContextProvider;
