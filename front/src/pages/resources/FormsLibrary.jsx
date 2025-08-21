import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FiFileText, FiDownload } from 'react-icons/fi';

const FormsLibrary = () => {
  const { language } = useSelector((state) => state.language);
  const currentLanguage = language || 'ar';

  const forms = [
    { title: { ar: 'نموذج التسجيل', fr: 'Formulaire d\'inscription', en: 'Registration Form' }, link: '#' },
    { title: { ar: 'نموذج طبي', fr: 'Formulaire médical', en: 'Medical Form' }, link: '#' },
    { title: { ar: 'نموذج طلب إجازة', fr: 'Formulaire de demande de congé', en: 'Leave Request Form' }, link: '#' },
    { title: { ar: 'نموذج النقل', fr: 'Formulaire de transport', en: 'Transportation Form' }, link: '#' },
  ];

  const pageTitle = { ar: 'مكتبة النماذج', fr: 'Bibliothèque de formulaires', en: 'Forms Library' };

  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">{pageTitle[currentLanguage]}</h1>
        </div>
        <div className="space-y-4">
          {forms.map((form, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-between"
            >
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <FiFileText className="text-brand dark:text-brand-light" size={24} />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{form.title[currentLanguage]}</h3>
              </div>
              <a href={form.link} download className="text-brand dark:text-brand-light hover:underline flex items-center">
                <FiDownload className="ltr:mr-2 rtl:ml-2" />
                {currentLanguage === 'ar' ? 'تحميل' : 'Download'}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormsLibrary;
