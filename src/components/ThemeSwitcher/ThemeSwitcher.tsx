'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import clsx from 'clsx';

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
    return <div className="w-[24px] h-[24px] hidden md:block" />;
  }

  return (
    <button
      className={clsx('cursor-pointer', classname)}
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      {...rest}
    >
      {theme === 'dark' ? <MdDarkMode size={24} /> : <MdLightMode size={24} />}
    </button>
  );
}
