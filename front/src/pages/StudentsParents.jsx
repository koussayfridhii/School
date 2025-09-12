import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../store/languageSlice';
import Hero from '../components/Hero';
import Card, { CardBody } from '../components/Card';

const StudentsParents = () => {
  const currentLanguage = useSelector(selectLanguage);
  const location = useLocation();

  const subNavLinks = [
    { to: '/students-parents/portal', text: { ar: 'بوابة الطالب', fr: 'Portail étudiant', en: 'Student Portal' } },
    { to: '/students-parents/resources', text: { ar: 'موارد أولياء الأمور', fr: 'Ressources pour les parents', en: 'Parent Resources' } },
    { to: '/students-parents/pta', text: { ar: 'مجلس الآباء والمعلمين', fr: 'Association parents-enseignants', en: 'PTA' } },
  ];

  return (
    <main className="flex-grow">
      <Hero
        title={currentLanguage === 'ar' ? 'الطلاب وأولياء الأمور' : currentLanguage === 'fr' ? 'Étudiants & Parents' : 'Students & Parents'}
        subtitle={currentLanguage === 'ar' ? 'موارد ومعلومات أساسية' : currentLanguage === 'fr' ? 'Ressources et informations clés' : 'Key resources and information'}
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

export default StudentsParents;
