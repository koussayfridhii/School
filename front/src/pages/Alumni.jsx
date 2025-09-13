import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../store/languageSlice';
import Hero from '../components/Hero';
import Card, { CardBody } from '../components/Card';

const Alumni = () => {
  const currentLanguage = useSelector(selectLanguage);
  const location = useLocation();

  const subNavLinks = [
    { to: '/alumni/network', text: { ar: 'شبكة الخريجين', fr: 'Réseau des anciens', en: 'Alumni Network' } },
    { to: '/alumni/success-stories', text: { ar: 'قصص النجاح', fr: 'Histoires de réussite', en: 'Success Stories' } },
    { to: '/alumni/events', text: { ar: 'الأحداث', fr: 'Événements', en: 'Events' } },
  ];

  return (
    <main className="flex-grow">
      <Hero
        title={currentLanguage === 'ar' ? 'الخريجون' : currentLanguage === 'fr' ? 'Anciens' : 'Alumni'}
        subtitle={currentLanguage === 'ar' ? 'ابق على اتصال مع مجتمع النصر' : currentLanguage === 'fr' ? 'Restez connecté avec la communauté Al Nasser' : 'Stay connected with the Al Nasser community'}
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

export default Alumni;
