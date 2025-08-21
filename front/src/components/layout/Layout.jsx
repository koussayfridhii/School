import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const theme = useSelector((state) => state.theme.theme);
  const language = useSelector((state) => state.language.language);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    root.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
  }, [theme, language]);

  return (
    <div className={`font-sans ${language === 'ar' ? 'font-cairo' : ''} bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300`}>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
