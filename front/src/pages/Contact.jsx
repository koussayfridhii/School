import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../store/languageSlice';
import Hero from '../components/Hero';
import Card, { CardBody } from '../components/Card';

const Contact = () => {
  const currentLanguage = useSelector(selectLanguage);
  const location = useLocation();

  const subNavLinks = [
    { to: '/contact/details', text: { ar: 'تفاصيل الاتصال', fr: 'Coordonnées', en: 'Contact Details' } },
    { to: '/contact/map', text: { ar: 'الخريطة', fr: 'Carte', en: 'Map' } },
    { to: '/contact/inquiry', text: { ar: 'نموذج الاستفسار', fr: 'Formulaire de demande', en: 'Inquiry Form' } },
  ];

  return (
    <main className="flex-grow">
      <Hero
        title={currentLanguage === 'ar' ? 'اتصل بنا' : currentLanguage === 'fr' ? 'Contactez-nous' : 'Contact Us'}
        subtitle={currentLanguage === 'ar' ? 'نحن هنا للمساعدة' : currentLanguage === 'fr' ? 'Nous sommes là pour vous aider' : 'We are here to help'}
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

export default Contact;
