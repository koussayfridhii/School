import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FiCalendar } from 'react-icons/fi';

const EventCalendar = () => {
  const { language } = useSelector((state) => state.language);
  const currentLanguage = language || 'ar';

  const events = [
    { date: '2024-11-15', title: { ar: 'المسابقة السنوية للخطابة', fr: 'Concours d\'art oratoire annuel', en: 'Annual Speech Contest' }, time: { ar: '١٠:٠٠ صباحًا', fr: '10h00', en: '10:00 AM' } },
    { date: '2024-11-25', title: { ar: 'اليوم الثقافي الدولي', fr: 'Journée culturelle internationale', en: 'International Culture Day' }, time: { ar: '١٢:٠٠ ظهرًا', fr: '12h00', en: '12:00 PM' } },
    { date: '2024-12-10', title: { ar: 'حفل موسيقي شتوي', fr: 'Concert d\'hiver', en: 'Winter Concert' }, time: { ar: '٦:٠٠ مساءً', fr: '18h00', en: '6:00 PM' } },
    { date: '2025-02-22', title: { ar: 'يوم التأسيس السعودي', fr: 'Jour de la fondation saoudienne', en: 'Saudi Founding Day' }, time: { ar: 'يوم كامل', fr: 'Toute la journée', en: 'All Day' } },
  ];

  const pageTitle = { ar: 'تقويم الفعاليات', fr: 'Calendrier des événements', en: 'Event Calendar' };
  const upcoming = { ar: 'الفعاليات القادمة', fr: 'Événements à venir', en: 'Upcoming Events' };

  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <FiCalendar className="mx-auto text-5xl text-brand dark:text-brand-light mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">{pageTitle[currentLanguage]}</h1>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">{upcoming[currentLanguage]}</h2>
        <div className="space-y-4">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-between"
            >
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="text-center bg-primary-100 dark:bg-brand/20 p-3 rounded-lg w-20">
                  <p className="text-sm font-bold text-brand dark:text-brand-light">{new Date(event.date).toLocaleDateString(currentLanguage === 'ar' ? 'ar-SA' : 'en-US', { month: 'short' })}</p>
                  <p className="text-2xl font-bold text-gray-800 dark:text-white">{new Date(event.date).getDate()}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{event.title[currentLanguage]}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{event.time[currentLanguage]}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
