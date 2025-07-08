import { AppContextProvider } from "@Contexts/AppContext";
import DimensionContextProvider from "@Contexts/DimensionContext";
import SecurityContextProvider from "@Contexts/SecurityContext";

const SuperContext = ({ children }) => {
  return (
    <AppContextProvider>
      <SecurityContextProvider>
        <DimensionContextProvider>{children}</DimensionContextProvider>
      </SecurityContextProvider>
    </AppContextProvider>
  );
};

export default SuperContext;
