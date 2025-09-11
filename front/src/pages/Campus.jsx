import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../store/languageSlice';
import Hero from '../components/Hero';

const Campus = () => {
  const currentLanguage = useSelector(selectLanguage);
  const location = useLocation();

  const subNavLinks = [
    { to: '/campus/virtual-tour', text: { ar: 'جولة افتراضية', fr: 'Visite virtuelle', en: 'Virtual Tour' } },
    { to: '/campus/facilities', text: { ar: 'نظرة عامة على المرافق', fr: 'Aperçu des installations', en: 'Facilities Overview' } },
  ];

  return (
    <div>
      <Hero
        title={currentLanguage === 'ar' ? 'الحرم الجامعي والمرافق' : currentLanguage === 'fr' ? 'Campus & Installations' : 'Campus & Facilities'}
        subtitle={currentLanguage === 'ar' ? 'استكشف بيئتنا التعليمية الحديثة' : currentLanguage === 'fr' ? 'Explorez notre environnement d\'apprentissage moderne' : 'Explore our modern learning environment'}
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

export default Campus;
