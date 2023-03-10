"use client";
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  return (
    <>
    { mounted && currentTheme === 'dark' ? (
      <MdLightMode className='text-xl cursor-pointer hover:text-amber-500' onClick={() => setTheme('light')} />
    ) : (
      <MdDarkMode className='text-xl cursor-pointer hover:text-amber-500' onClick={() => setTheme('dark')} />
    )}
      
    </>
  )
}
