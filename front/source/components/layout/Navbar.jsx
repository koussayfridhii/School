import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../store/themeSlice';
import { setLanguage } from '../../store/languageSlice';
import { selectAccessToken, clearCredentials } from '../../store/authSlice';
import { FiMenu, FiX, FiSun, FiMoon, FiLogOut, FiLayout } from 'react-icons/fi';
import { FaGlobe } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const { language } = useSelector((state) => state.language);
  const accessToken = useSelector(selectAccessToken);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langDropdownRef = useRef(null);

  const currentLanguage = language || 'ar';

  const navLinks = [
    { name: { ar: 'الرئيسية', fr: 'Accueil', en: 'Home' }, path: '/' },
    { name: { ar: 'عن المدرسة', fr: 'À Propos', en: 'About Us' }, path: '/about' },
    { name: { ar: 'الأكاديميون', fr: 'Académique', en: 'Academics' }, path: '/academics' },
    { name: { ar: 'القبول', fr: 'Admissions', en: 'Admissions' }, path: '/admissions' },
    { name: { ar: 'الحرم الجامعي والمرافق', fr: 'Campus', en: 'Campus' }, path: '/campus' },
    { name: { ar: 'الطلاب وأولياء الأمور', fr: 'Vie Étudiante', en: 'Student Life' }, path: '/student-life' },
    { name: { ar: 'أخبار وأحداث', fr: 'Actualités', en: 'News & Events' }, path: '/news' },
    { name: { ar: 'اتصل بنا', fr: 'Contact', en: 'Contact' }, path: '/contact' },
  ];

  const handleLangChange = (lang) => {
    dispatch(setLanguage(lang));
    setIsLangOpen(false);
  };

  const handleLogout = () => {
    dispatch(clearCredentials());
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  const activeLinkStyle = {
    color: '#0D47A1', // brand color
    fontWeight: 'bold',
  };

  return (
    <nav className="bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-brand dark:text-primary-dark">
                {currentLanguage === 'ar' ? 'النصر' : 'Al Nasser'}
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="px-3 py-2 text-text-light dark:text-text-dark hover:text-brand dark:hover:text-brand-light rounded-md text-sm font-medium transition-colors"
                style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                end={link.path === '/'}
              >
                {link.name[currentLanguage]}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            {accessToken ? (
              <>
                <NavLink to="/dashboard" className="p-2 rounded-full text-text-light dark:text-text-dark hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <FiLayout size={20} />
                </NavLink>
                <button onClick={handleLogout} className="p-2 rounded-full text-text-light dark:text-text-dark hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                  <FiLogOut size={20} />
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" className="px-3 py-2 text-text-light dark:text-text-dark hover:text-brand dark:hover:text-brand-light rounded-md text-sm font-medium transition-colors">
                  Login
                </NavLink>
              </>
            )}
            {/* Theme Toggle */}
            <button onClick={() => dispatch(toggleTheme())} className="p-2 rounded-full text-text-light dark:text-text-dark hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
                </motion.div>
              </AnimatePresence>
            </button>

            {/* Language Switcher */}
            <div className="relative" ref={langDropdownRef}>
              <button onClick={() => setIsLangOpen(!isLangOpen)} className="p-2 rounded-full text-text-light dark:text-text-dark hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <FaGlobe size={20} />
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute ltr:right-0 rtl:left-0 mt-2 w-32 bg-background-light dark:bg-gray-800 rounded-md shadow-lg overflow-hidden"
                  >
                    <a onClick={() => handleLangChange('ar')} className="block cursor-pointer w-full text-right px-4 py-2 text-sm text-text-light dark:text-text-dark hover:bg-gray-100 dark:hover:bg-gray-700">العربية</a>
                    <a onClick={() => handleLangChange('en')} className="block cursor-pointer w-full text-left px-4 py-2 text-sm text-text-light dark:text-text-dark hover:bg-gray-100 dark:hover:bg-gray-700">English</a>
                    <a onClick={() => handleLangChange('fr')} className="block cursor-pointer w-full text-left px-4 py-2 text-sm text-text-light dark:text-text-dark hover:bg-gray-100 dark:hover:bg-gray-700">Français</a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-text-light dark:text-text-dark hover:bg-gray-200 dark:hover:bg-gray-700">
                {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background-light dark:bg-background-dark/95"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className="block px-3 py-2 text-base font-medium text-text-light dark:text-text-dark hover:text-brand dark:hover:text-brand-light rounded-md"
                  style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                  end={link.path === '/'}
                >
                  {link.name[currentLanguage]}
                </NavLink>
              ))}
              <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
              {accessToken ? (
                <>
                  <NavLink to="/dashboard" className="block px-3 py-2 text-base font-medium text-text-light dark:text-text-dark hover:text-brand dark:hover:text-brand-light rounded-md">Dashboard</NavLink>
                  <a onClick={handleLogout} className="block px-3 py-2 text-base font-medium text-text-light dark:text-text-dark hover:text-brand dark:hover:text-brand-light rounded-md cursor-pointer">Logout</a>
                </>
              ) : (
                <>
                  <NavLink to="/login" className="block px-3 py-2 text-base font-medium text-text-light dark:text-text-dark hover:text-brand dark:hover:text-brand-light rounded-md">Login</NavLink>
                  <NavLink to="/signup" className="block px-3 py-2 text-base font-medium text-text-light dark:text-text-dark hover:text-brand dark:hover:text-brand-light rounded-md">Sign Up</NavLink>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
