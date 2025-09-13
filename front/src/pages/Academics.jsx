import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../store/languageSlice';
import Hero from '../components/Hero';
import Card, { CardBody } from '../components/Card';

const Academics = () => {
  const currentLanguage = useSelector(selectLanguage);
  const location = useLocation();

  const subNavLinks = [
    { to: '/academics/curriculum', text: { ar: 'نظرة عامة على المنهج', fr: 'Aperçu du curriculum', en: 'Curriculum Overview' } },
    { to: '/academics/programs', text: { ar: 'البرامج', fr: 'Programmes', en: 'Programs' } },
    { to: '/academics/calendar', text: { ar: 'التقويم الأكاديمي', fr: 'Calendrier académique', en: 'Academic Calendar' } },
  ];

  return (
    <main className="flex-grow">
      <Hero
        title={currentLanguage === 'ar' ? 'الأكاديميون' : currentLanguage === 'fr' ? 'Académiques' : 'Academics'}
        subtitle={currentLanguage === 'ar' ? 'اكتشف نهجنا التعليمي' : currentLanguage === 'fr' ? 'Découvrez notre approche éducative' : 'Discover our educational approach'}
      />
      <div className="container mx-auto py-12 px-4 flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4">
          <nav className="sticky top-24">
            <ul className="space-y-2">
              {subNavLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`block py-2 px-4 rounded-lg transition-colors ${location.pathname === link.to ? 'bg-primary text-white' : 'hover:bg-color-muted/10'}`}
                  >
                    {link.text[currentLanguage]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <section className="w-full md:w-3/4">
          <Card>
            <CardBody>
                <Outlet />
            </CardBody>
          </Card>
        </section>
      </div>
    </main>
  );
};

export default Academics;
