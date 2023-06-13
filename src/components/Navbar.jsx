"use client"
import React from "react";
import { useHeader } from "../contexts/useHeader";

const Navbar = () => {
  const { showHeader } = useHeader();

  if (!showHeader) {
    return<></>
  }

  return (
    <ul style={{ display: "flex", gap: 10 }}>
      <li>Home</li>
      <li>About</li>
      <li>News</li>
    </ul>
  );
};

export default Navbar;
