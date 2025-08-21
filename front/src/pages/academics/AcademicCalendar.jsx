import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FiCalendar, FiDownload } from 'react-icons/fi';

const AcademicCalendar = () => {
  const { language } = useSelector((state) => state.language);
  const currentLanguage = language || 'ar';

  const events = [
    {
      date: { ar: '٢٥ أغسطس ٢٠٢٤', fr: '25 août 2024', en: 'August 25, 2024' },
      title: { ar: 'بداية العام الدراسي', fr: 'Début de l\'année scolaire', en: 'Start of School Year' },
      description: { ar: 'اليوم الأول من الدراسة لجميع الطلاب.', fr: 'Premier jour de classe pour tous les élèves.', en: 'First day of classes for all students.' },
    },
    {
      date: { ar: '١٥ - ١٩ أكتوبر ٢٠٢٤', fr: '15-19 octobre 2024', en: 'October 15-19, 2024' },
      title: { ar: 'عطلة منتصف الفصل الدراسي', fr: 'Vacances de mi-semestre', en: 'Mid-term Break' },
      description: { ar: 'عطلة لجميع الطلاب والموظفين.', fr: 'Break for all students and staff.', en: 'Break for all students and staff.' },
    },
    {
      date: { ar: '٢٠ ديسمبر ٢٠٢٤ - ٥ يناير ٢٠٢٥', fr: '20 déc. 2024 - 5 jan. 2025', en: 'Dec 20, 2024 - Jan 5, 2025' },
      title: { ar: 'عطلة الشتاء', fr: 'Vacances d\'hiver', en: 'Winter Break' },
      description: { ar: 'نهاية الفصل الدراسي الأول وبداية عطلة الشتاء.', fr: 'End of the first semester and start of the winter holidays.', en: 'End of the first semester and start of the winter holidays.' },
    },
    {
      date: { ar: '١٥ مارس ٢٠٢٥', fr: '15 mars 2025', en: 'March 15, 2025' },
      title: { ar: 'اجتماعات أولياء الأمور والمعلمين', fr: 'Réunions parents-enseignants', en: 'Parent-Teacher Conferences' },
      description: { ar: 'فرصة لمناقشة تقدم الطلاب.', fr: 'Opportunity to discuss student progress.', en: 'Opportunity to discuss student progress.' },
    },
    {
      date: { ar: '١٥ يونيو ٢٠٢٥', fr: '15 juin 2025', en: 'June 15, 2025' },
      title: { ar: 'نهاية العام الدراسي', fr: 'Fin de l\'année scolaire', en: 'End of School Year' },
      description: { ar: 'آخر يوم دراسي للطلاب.', fr: 'Last day of classes for students.', en: 'Last day of classes for students.' },
    },
  ];

  const pageTitle = {
    ar: 'التقويم الأكاديمي',
    fr: 'Calendrier Académique',
    en: 'Academic Calendar',
  };

  const downloadText = {
      ar: 'تحميل التقويم الكامل (PDF)',
      fr: 'Télécharger le calendrier complet (PDF)',
      en: 'Download Full Calendar (PDF)'
  }

  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <FiCalendar className="mx-auto text-5xl text-brand dark:text-brand-light mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">{pageTitle[currentLanguage]}</h1>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {events.map((event, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold text-brand dark:text-brand-light">{event.date[currentLanguage]}</p>
                    <h3 className="mt-1 text-xl font-bold text-gray-800 dark:text-white">{event.title[currentLanguage]}</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">{event.description[currentLanguage]}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-12">
            <a href="/path-to-calendar.pdf" download className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand">
                <FiDownload className="ltr:mr-2 rtl:ml-2 -ml-1 h-5 w-5" />
                {downloadText[currentLanguage]}
            </a>
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendar;
