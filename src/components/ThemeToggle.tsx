"use client"
import useTheme from "../hooks/useTheme";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle()
{
    const {theme, toggleTheme} = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition duration-300 
                ${theme === "light" ? "bg-gray-200 text-gray-800" : "bg-gray-800 text-white"}`}
        >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
    );
}
