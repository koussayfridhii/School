import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../store/languageSlice';
import Hero from '../components/Hero';

const NewsEvents = () => {
  const currentLanguage = useSelector(selectLanguage);
  const location = useLocation();

  const subNavLinks = [
    { to: '/news-events/news', text: { ar: 'الأخبار', fr: 'Nouvelles', en: 'News' } },
    { to: '/news-events/calendar', text: { ar: 'تقويم الأحداث', fr: 'Calendrier des événements', en: 'Event Calendar' } },
    { to: '/news-events/blog', text: { ar: 'المدونة', fr: 'Blog', en: 'Blog' } },
  ];

  return (
    <div>
      <Hero
        title={currentLanguage === 'ar' ? 'الأخبار والأحداث' : currentLanguage === 'fr' ? 'Nouvelles & Événements' : 'News & Events'}
        subtitle={currentLanguage === 'ar' ? 'ابق على اطلاع على آخر المستجدات في مجتمعنا' : currentLanguage === 'fr' ? 'Restez à jour sur les dernières nouvelles de notre communauté' : 'Stay up to date with the latest in our community'}
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

export default NewsEvents;
