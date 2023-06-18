"use client";
import React, { useContext } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { ThemeContext } from "../../../context/ThemeContext";
const DarkMode = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div className="darkContainer" onClick={toggle}>
      <div className="darkIcon">
        <MdDarkMode />
      </div>
      <div className="darkIcon">
        <MdLightMode />
      </div>
      <div
        className="darkBall"
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkMode;
