"use client"
import { useContext } from "react";
import { useState } from "react";

const { createContext } = require("react");

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [showHeader, setShowHeader] = useState(true);
  return (
    <HeaderContext.Provider value={{ showHeader, setShowHeader }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = () => {
    const context = useContext(HeaderContext);
    return context
}