import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../store/languageSlice';
import Hero from '../components/Hero';

const Contact = () => {
  const currentLanguage = useSelector(selectLanguage);
  const location = useLocation();

  const subNavLinks = [
    { to: '/contact/details', text: { ar: 'تفاصيل الاتصال', fr: 'Coordonnées', en: 'Contact Details' } },
    { to: '/contact/map', text: { ar: 'الخريطة', fr: 'Carte', en: 'Map' } },
    { to: '/contact/inquiry', text: { ar: 'نموذج الاستفسار', fr: 'Formulaire de demande', en: 'Inquiry Form' } },
  ];

  return (
    <div>
      <Hero
        title={currentLanguage === 'ar' ? 'اتصل بنا' : currentLanguage === 'fr' ? 'Contactez-nous' : 'Contact Us'}
        subtitle={currentLanguage === 'ar' ? 'نحن هنا للمساعدة' : currentLanguage === 'fr' ? 'Nous sommes là pour vous aider' : 'We are here to help'}
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

export default Contact;
