import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";
import { useTheme } from "../theme-context.js";

const DarkMode = () => {
    const { isDarkMode, toggleDarkMode } = useTheme();

    return (
        <div className="dark_mode">
            <input
                className="dark_mode_input"
                type="checkbox"
                id="darkmode-toggle"
                checked={isDarkMode}
                onChange={toggleDarkMode}
            />
            <label className="dark_mode_label" htmlFor="darkmode-toggle">
                {isDarkMode ? <Moon /> : <Sun />} 
            </label>
        </div>
    );
};

export default DarkMode;
