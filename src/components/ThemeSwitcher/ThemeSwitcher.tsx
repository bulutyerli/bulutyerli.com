'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

interface ThemeSwitcherProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  classname?: string;
}

export default function ThemeSwitcher({
  classname,
  ...rest
}: ThemeSwitcherProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={classname}
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      {...rest} // Spread other props here
    >
      {theme === 'dark' ? <MdDarkMode size={24} /> : <MdLightMode size={24} />}
    </button>
  );
}
