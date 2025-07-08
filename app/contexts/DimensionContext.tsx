import { createContext } from "react";

interface DimensionProps {}

export const DimensionContext = createContext<DimensionProps>(null);

const DimensionContextProvider = ({ children }) => {
  return (
    <DimensionContext.Provider value={{}}>{children}</DimensionContext.Provider>
  );
};

export default DimensionContextProvider;
