import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [curPage, setCurPage] = useState('Home');

  const updatePage = (newValue) => {
    setCurPage(newValue);
  };

  return (
    <AppContext.Provider value={{ curPage, updatePage }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppState() {
  return useContext(AppContext);
}