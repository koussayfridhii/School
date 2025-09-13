import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../store/languageSlice';
import Hero from '../components/Hero';
import Card, { CardBody } from '../components/Card';

const Campus = () => {
  const currentLanguage = useSelector(selectLanguage);
  const location = useLocation();

  const subNavLinks = [
    { to: '/campus/virtual-tour', text: { ar: 'جولة افتراضية', fr: 'Visite virtuelle', en: 'Virtual Tour' } },
    { to: '/campus/facilities', text: { ar: 'نظرة عامة على المرافق', fr: 'Aperçu des installations', en: 'Facilities Overview' } },
  ];

  return (
    <main className="flex-grow">
      <Hero
        title={currentLanguage === 'ar' ? 'الحرم الجامعي والمرافق' : currentLanguage === 'fr' ? 'Campus & Installations' : 'Campus & Facilities'}
        subtitle={currentLanguage === 'ar' ? 'استكشف بيئتنا التعليمية الحديثة' : currentLanguage === 'fr' ? 'Explorez notre environnement d\'apprentissage moderne' : 'Explore our modern learning environment'}
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

export default Campus;
