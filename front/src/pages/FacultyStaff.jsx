import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../store/languageSlice';
import Hero from '../components/Hero';
import Card, { CardBody } from '../components/Card';

const FacultyStaff = () => {
  const currentLanguage = useSelector(selectLanguage);
  const location = useLocation();

  const subNavLinks = [
    { to: '/faculty-staff/profiles', text: { ar: 'ملفات هيئة التدريس', fr: 'Profils du corps professoral', en: 'Faculty Profiles' } },
    { to: '/faculty-staff/careers', text: { ar: 'الوظائف', fr: 'Carrières', en: 'Careers' } },
  ];

  return (
    <main className="flex-grow">
      <Hero
        title={currentLanguage === 'ar' ? 'هيئة التدريس والموظفون' : currentLanguage === 'fr' ? 'Faculté & Personnel' : 'Faculty & Staff'}
        subtitle={currentLanguage === 'ar' ? 'تعرف على فريقنا المتفاني' : currentLanguage === 'fr' ? 'Rencontrez notre équipe dévouée' : 'Meet our dedicated team'}
      />
      <div className="container mx-auto py-12 px-4 flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4">
          <nav className="sticky top-24">
            <ul className="space-y-2">
              {subNavLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`block py-2 px-4 rounded-lg transition-colors ${location.pathname === link.to ? 'bg-primary text-white' : 'hover:bg-neutral-200 dark:hover:bg-neutral-700'}`}
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

export default FacultyStaff;
