import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../store/languageSlice';
import Hero from '../components/Hero';

const Admissions = () => {
  const currentLanguage = useSelector(selectLanguage);
  const location = useLocation();

  const subNavLinks = [
    { to: '/admissions/process', text: { ar: 'العملية', fr: 'Processus', en: 'Process' } },
    { to: '/admissions/criteria', text: { ar: 'المعايير', fr: 'Critères', en: 'Criteria' } },
    { to: '/admissions/tuition', text: { ar: 'الرسوم الدراسية', fr: 'Frais de scolarité', en: 'Tuition & Fees' } },
    { to: '/admissions/apply', text: { ar: 'قدم الآن', fr: 'Postulez maintenant', en: 'Apply Now' } },
  ];

  return (
    <div>
      <Hero
        title={currentLanguage === 'ar' ? 'القبول' : currentLanguage === 'fr' ? 'Admissions' : 'Admissions'}
        subtitle={currentLanguage === 'ar' ? 'انضم إلى مجتمعنا المدرسي' : currentLanguage === 'fr' ? 'Rejoignez notre communauté scolaire' : 'Join our school community'}
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

export default Admissions;
