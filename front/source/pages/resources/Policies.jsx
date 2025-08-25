import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FiShield, FiDownload } from 'react-icons/fi';

const Policies = () => {
  const { language } = useSelector((state) => state.language);
  const currentLanguage = language || 'ar';

  const policies = [
    { title: { ar: 'سياسة السلوك الطلابي', fr: 'Politique de conduite des élèves', en: 'Student Conduct Policy' }, link: '#' },
    { title: { ar: 'سياسة الحضور والغياب', fr: 'Politique de présence', en: 'Attendance Policy' }, link: '#' },
    { title: { ar: 'سياسة مكافحة التنمر', fr: 'Politique anti-intimidation', en: 'Anti-Bullying Policy' }, link: '#' },
    { title: { ar: 'سياسة الاستخدام المقبول للتكنولوجيا', fr: 'Politique d\'utilisation acceptable de la technologie', en: 'Acceptable Use Policy for Technology' }, link: '#' },
  ];

  const pageTitle = { ar: 'السياسات المدرسية', fr: 'Politiques de l\'école', en: 'School Policies' };
  const pageDescription = { ar: 'التزامنا بالتميز يمتد إلى سياساتنا، المصممة لضمان بيئة تعليمية آمنة ومحترمة ومنتجة لجميع الطلاب والموظفين.', fr: 'Notre engagement envers l\'excellence s\'étend à nos politiques, conçues pour garantir un environnement d\'apprentissage sûr, respectueux et productif pour tous les élèves et le personnel.', en: 'Our commitment to excellence extends to our policies, designed to ensure a safe, respectful, and productive learning environment for all students and staff.' };

  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <FiShield className="mx-auto text-5xl text-brand dark:text-brand-light mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">{pageTitle[currentLanguage]}</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{pageDescription[currentLanguage]}</p>
        </div>
        <div className="space-y-4">
          {policies.map((policy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-between"
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{policy.title[currentLanguage]}</h3>
              <a href={policy.link} download className="text-brand dark:text-brand-light hover:underline flex items-center">
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

export default Policies;
