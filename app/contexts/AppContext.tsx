import { Dispatch, SetStateAction, createContext, useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';

import { supportedLang } from '@Utilities/genConfigs';

interface AppProps {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  activeLang: string;
  setActiveLang: Dispatch<SetStateAction<string>>;
}

const initContextData = {
  loading: true,
  setLoading: () => {},
  activeLang: '',
  setActiveLang: () => {},
};

const AppContext = createContext<AppProps>(initContextData);

const AppContextProvider = ({ children }) => {
  // const { i18n } = useTranslation();
  const defaultLang = 'en';

  const [loading, setLoading] = useState<boolean>(false);
  const [stopL, setStopL] = useState<boolean>(false);
  const [activeLang, setActiveLang] = useState<keyof typeof supportedLang>();

  // useEffect(() => {
  //   const selectedLang = localStorage.getItem('lang');
  //   if (selectedLang) {
  //     i18n.changeLanguage(activeLang);
  //   } else {
  //     i18n.changeLanguage(defaultLang);
  //   }
  // }, [activeLang]);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        activeLang,
        setActiveLang,
      }}>
      {loading && <div>Loading...</div>}
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
