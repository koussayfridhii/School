import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../store/languageSlice';
import Hero from '../components/Hero';
import Card, { CardBody } from '../components/Card';

const About = () => {
  const currentLanguage = useSelector(selectLanguage);
  const location = useLocation();

  const subNavLinks = [
    { to: '/about/our-story', text: { ar: 'قصتنا', fr: 'Notre Histoire', en: 'Our Story' } },
    { to: '/about/vision-values', text: { ar: 'الرؤية والقيم', fr: 'Vision & Valeurs', en: 'Vision & Values' } },
    { to: '/about/leadership', text: { ar: 'القيادة', fr: 'Direction', en: 'Leadership' } },
    { to: '/about/accreditations', text: { ar: 'الاعتمادات', fr: 'Accréditations', en: 'Accreditations' } },
  ];

  return (
    <main className="flex-grow">
      <Hero
        title={currentLanguage === 'ar' ? 'من نحن' : currentLanguage === 'fr' ? 'À propos de nous' : 'About Us'}
        subtitle={currentLanguage === 'ar' ? 'تعرف على تاريخنا ورسالتنا' : currentLanguage === 'fr' ? 'Découvrez notre histoire et notre mission' : 'Learn about our history and mission'}
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

export default About;
