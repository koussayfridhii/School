import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../store/languageSlice';
import Hero from '../components/Hero';
import Card, { CardBody } from '../components/Card';

const NewsEvents = () => {
  const currentLanguage = useSelector(selectLanguage);
  const location = useLocation();

  const subNavLinks = [
    { to: '/news-events/news', text: { ar: 'الأخبار', fr: 'Nouvelles', en: 'News' } },
    { to: '/news-events/calendar', text: { ar: 'تقويم الأحداث', fr: 'Calendrier des événements', en: 'Event Calendar' } },
    { to: '/news-events/blog', text: { ar: 'المدونة', fr: 'Blog', en: 'Blog' } },
  ];

  return (
    <main className="flex-grow">
      <Hero
        title={currentLanguage === 'ar' ? 'الأخبار والأحداث' : currentLanguage === 'fr' ? 'Nouvelles & Événements' : 'News & Events'}
        subtitle={currentLanguage === 'ar' ? 'ابق على اطلاع على آخر المستجدات في مجتمعنا' : currentLanguage === 'fr' ? 'Restez à jour sur les dernières nouvelles de notre communauté' : 'Stay up to date with the latest in our community'}
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

export default NewsEvents;
