import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../store/languageSlice';
import Hero from '../components/Hero';

const ResourcesDownloads = () => {
  const currentLanguage = useSelector(selectLanguage);
  const location = useLocation();

  const subNavLinks = [
    { to: '/resources/forms', text: { ar: 'مكتبة النماذج', fr: 'Bibliothèque de formulaires', en: 'Forms Library' } },
    { to: '/resources/policies', text: { ar: 'السياسات', fr: 'Politiques', en: 'Policies' } },
    { to: '/resources/downloads', text: { ar: 'التنزيلات', fr: 'Téléchargements', en: 'Downloads' } },
  ];

  return (
    <div>
      <Hero
        title={currentLanguage === 'ar' ? 'الموارد والتنزيلات' : currentLanguage === 'fr' ? 'Ressources & Téléchargements' : 'Resources & Downloads'}
        subtitle={currentLanguage === 'ar' ? 'ابحث عن النماذج والمستندات المهمة' : currentLanguage === 'fr' ? 'Trouvez des formulaires et documents importants' : 'Find important forms and documents'}
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

export default ResourcesDownloads;
