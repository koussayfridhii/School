import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectLanguage, setLanguage } from '../store/languageSlice';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(selectLanguage);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    dispatch(setLanguage(lang));
  };

  const navLinks = [
    { to: "/", text: { ar: "الرئيسية", fr: "Accueil", en: "Home" } },
    { to: "/about", text: { ar: "من نحن", fr: "À propos de nous", en: "About Us" } },
    { to: "/academics", text: { ar: "الأكاديميون", fr: "Académiques", en: "Academics" } },
    { to: "/admissions", text: { ar: "القبول", fr: "Admissions", en: "Admissions" } },
    { to: "/campus", text: { ar: "الحرم الجامعي", fr: "Campus", en: "Campus" } },
    { to: "/students-parents", text: { ar: "الطلاب وأولياء الأمور", fr: "Étudiants & Parents", en: "Students & Parents" } },
    { to: "/faculty", text: { ar: "هيئة التدريس", fr: "Faculté", en: "Faculty" } },
    { to: "/news-events", text: { ar: "الأخبار والأحداث", fr: "Nouvelles & Événements", en: "News & Events" } },
    { to: "/resources", text: { ar: "الموارد", fr: "Ressources", en: "Resources" } },
    { to: "/alumni", text: { ar: "الخريجون", fr: "Anciens", en: "Alumni" } },
    { to: "/contact", text: { ar: "اتصل بنا", fr: "Contactez-nous", en: "Contact Us" } },
  ];

  return (
    <nav className="bg-background-light dark:bg-background-dark shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-primary">
            <Link to="/">
              {currentLanguage === "ar" ? "مدارس النصر الخاصة" : currentLanguage === "fr" ? "Écoles Privées Al Nasser" : "Al Nasser Private Schools"}
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.slice(0, 5).map(link => (
              <Link key={link.to} to={link.to} className="text-text-light dark:text-text-dark hover:text-primary">
                {link.text[currentLanguage]}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <div className="relative">
              <button onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-700 text-text-light dark:text-text-dark">
                {currentLanguage.toUpperCase()}
              </button>
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-white dark:bg-neutral-800 rounded-md shadow-lg">
                  <button onClick={() => { handleLanguageChange('ar'); setIsLangMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700">AR</button>
                  <button onClick={() => { handleLanguageChange('en'); setIsLangMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700">EN</button>
                  <button onClick={() => { handleLanguageChange('fr'); setIsLangMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700">FR</button>
                </div>
              )}
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {/* Icon for menu */}
              <svg className="w-6 h-6 text-text-light dark:text-text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map(link => (
            <Link key={link.to} to={link.to} className="block px-3 py-2 rounded-md text-base font-medium text-text-light dark:text-text-dark hover:text-white hover:bg-primary">
              {link.text[currentLanguage]}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
