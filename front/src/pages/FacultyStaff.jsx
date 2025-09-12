import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../store/languageSlice';
import Hero from '../components/Hero';

const FacultyStaff = () => {
  const currentLanguage = useSelector(selectLanguage);
  const location = useLocation();

  const subNavLinks = [
    { to: '/faculty-staff/profiles', text: { ar: 'ملفات هيئة التدريس', fr: 'Profils du corps professoral', en: 'Faculty Profiles' } },
    { to: '/faculty-staff/careers', text: { ar: 'الوظائف', fr: 'Carrières', en: 'Careers' } },
  ];

  return (
    <div>
      <Hero
        title={currentLanguage === 'ar' ? 'هيئة التدريس والموظفون' : currentLanguage === 'fr' ? 'Faculté & Personnel' : 'Faculty & Staff'}
        subtitle={currentLanguage === 'ar' ? 'تعرف على فريقنا المتفاني' : currentLanguage === 'fr' ? 'Rencontrez notre équipe dévouée' : 'Meet our dedicated team'}
      />
      <div className="container mx-auto p-4 flex flex-col md:flex-row">
        <aside className="w-full md:w-1/4 p-4">
          <nav className="sticky top-20">
            <ul>
              {subNavLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`block py-2 px-4 rounded ${location.pathname === link.to ? 'bg-primary-light text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                  >
                    {link.text[currentLanguage]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="w-full md:w-3/4 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default FacultyStaff;
