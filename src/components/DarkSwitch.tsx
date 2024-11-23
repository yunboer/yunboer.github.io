"use client";
/*
    组件关键点：
    1. 使用localStorage的"theme"来存储主题
    2. 尝试用window.matchMedia('(prefers-color-scheme: dark)').matches来获取系统主题
    3. 通过document.documentElement.classList来切换主题（tailwind的config中设定为darkmode:class）
*/
import React, { useEffect, useCallback, useState } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';

const DarkSwitch: React.FC = () => {
    // 从localstorage中获取样式，如果没有设定，就是用系统的
    const getInitialTheme = useCallback((): ('dark' | 'light') => {
      const savedTheme = localStorage?.getItem('theme');
      if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
        return savedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }, []);
  
    const [theme, setTheme] = useState<'dark' | 'light'>(getInitialTheme);
    
    // 初始化系统状态
    useEffect(() => {
      const root = document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }, [theme]);
  
    // 切换主题
    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };
  
    return (
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
      >
        {theme === 'dark' ? <BiSun /> : <BiMoon />}
      </button>
    );
  };

export default DarkSwitch;
