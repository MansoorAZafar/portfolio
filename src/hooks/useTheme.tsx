"use client"
import { useEffect } from "react";

import { activeTheme } from "../../lib/atom";
import { useAtom } from "jotai";


export default function useTheme()
{
    const [theme, setTheme] = useAtom(activeTheme);

    useEffect(() => {
        if(theme === "dark") {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme("dark");
    };

    return {theme, toggleTheme};
}