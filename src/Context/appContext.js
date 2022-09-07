import { children, createContext, useContext } from "react";
import { useState } from "react";
import React from "react";

const SaveContext = createContext(null);

export const useSaveContext = () => {
  const savelater = useContext(SaveContext);
  return savelater;
};

const SaveContextProvider = ({ children }) => {
  const [save, setSave] = useState([]);
  const saveForLater = (result) => {
    const oldSave = [...save];
    const newSave = oldSave.concat(result);

    setSave(newSave);
  };
  return (
    <SaveContext.Provider value={{ save, saveForLater }}>
      {children}
    </SaveContext.Provider>
  );
};

export default SaveContextProvider;
