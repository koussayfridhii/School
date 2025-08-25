import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FiCalendar } from 'react-icons/fi';

const AlumniEvents = () => {
  const { language } = useSelector((state) => state.language);
  const currentLanguage = language || 'ar';

  const events = [
    {
      date: '2025-01-10',
      title: { ar: 'لقاء الخريجين السنوي', fr: 'Réunion annuelle des anciens', en: 'Annual Alumni Meetup' },
      location: { ar: 'الحرم المدرسي', fr: 'Campus de l\'école', en: 'School Campus' },
    },
    {
      date: '2025-03-20',
      title: { ar: 'ندوة التطوير المهني', fr: 'Séminaire sur le développement de carrière', en: 'Career Development Seminar' },
      location: { ar: 'عبر الإنترنت', fr: 'En ligne', en: 'Online' },
    },
  ];

  const pageTitle = { ar: 'فعاليات الخريجين', fr: 'Événements des anciens', en: 'Alumni Events' };

  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <FiCalendar className="mx-auto text-5xl text-brand dark:text-brand-light mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">{pageTitle[currentLanguage]}</h1>
        </div>
        <div className="space-y-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex justify-between items-center"
            >
              <div>
                <p className="text-brand dark:text-brand-light font-semibold">{new Date(event.date).toLocaleDateString(currentLanguage === 'ar' ? 'ar-SA' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-1">{event.title[currentLanguage]}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{event.location[currentLanguage]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlumniEvents;
