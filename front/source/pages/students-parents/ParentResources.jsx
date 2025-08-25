import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FiBook, FiCalendar, FiDownload } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ParentResources = () => {
  const { language } = useSelector((state) => state.language);
  const currentLanguage = language || 'ar';

  const resources = [
    {
      icon: <FiCalendar size={24} />,
      title: { ar: 'التقويم الأكاديمي', fr: 'Calendrier académique', en: 'Academic Calendar' },
      description: { ar: 'ابق على اطلاع بالتواريخ والأحداث الهامة.', fr: 'Restez à jour avec les dates et événements importants.', en: 'Stay updated with important dates and events.' },
      link: '/academics/academic-calendar',
      isExternal: false,
    },
    {
      icon: <FiBook size={24} />,
      title: { ar: 'دليل ولي الأمر', fr: 'Manuel des parents', en: 'Parent Handbook' },
      description: { ar: 'معلومات أساسية عن سياسات المدرسة وإجراءاتها.', fr: 'Informations essentielles sur les politiques et procédures de l\'école.', en: 'Essential information about school policies and procedures.' },
      link: '/path-to-handbook.pdf', // Placeholder
      isExternal: true,
    },
    {
      icon: <FiDownload size={24} />,
      title: { ar: 'نماذج', fr: 'Formulaires', en: 'Forms' },
      description: { ar: 'يمكنك الوصول إلى جميع النماذج اللازمة للتسجيل والأنشطة.', fr: 'Accédez à tous les formulaires nécessaires pour l\'inscription et les activités.', en: 'Access all necessary forms for registration and activities.' },
      link: '/resources/forms-library',
      isExternal: false,
    },
  ];

  const pageTitle = { ar: 'موارد أولياء الأمور', fr: 'Ressources pour les parents', en: 'Parent Resources' };

  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">{pageTitle[currentLanguage]}</h1>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
            >
              <div className="mx-auto bg-brand text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
                {resource.icon}
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{resource.title[currentLanguage]}</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300 h-16">{resource.description[currentLanguage]}</p>
              {resource.isExternal ? (
                <a href={resource.link} download target="_blank" rel="noopener noreferrer" className="text-brand dark:text-brand-light font-semibold mt-4 inline-block hover:underline">
                  {currentLanguage === 'ar' ? 'عرض' : currentLanguage === 'fr' ? 'Voir' : 'View'} &rarr;
                </a>
              ) : (
                <Link to={resource.link} className="text-brand dark:text-brand-light font-semibold mt-4 inline-block hover:underline">
                  {currentLanguage === 'ar' ? 'اذهب' : currentLanguage === 'fr' ? 'Aller' : 'Go'} &rarr;
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParentResources;
