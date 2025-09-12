import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../store/languageSlice';
import Hero from '../components/Hero';

const Academics = () => {
  const currentLanguage = useSelector(selectLanguage);
  const location = useLocation();

  const subNavLinks = [
    { to: '/academics/curriculum', text: { ar: 'نظرة عامة على المنهج', fr: 'Aperçu du curriculum', en: 'Curriculum Overview' } },
    { to: '/academics/programs', text: { ar: 'البرامج', fr: 'Programmes', en: 'Programs' } },
    { to: '/academics/calendar', text: { ar: 'التقويم الأكاديمي', fr: 'Calendrier académique', en: 'Academic Calendar' } },
  ];

  return (
    <div>
      <Hero
        title={currentLanguage === 'ar' ? 'الأكاديميون' : currentLanguage === 'fr' ? 'Académiques' : 'Academics'}
        subtitle={currentLanguage === 'ar' ? 'اكتشف نهجنا التعليمي' : currentLanguage === 'fr' ? 'Découvrez notre approche éducative' : 'Discover our educational approach'}
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

export default Academics;
