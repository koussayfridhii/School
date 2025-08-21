import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FiDownloadCloud, FiFile } from 'react-icons/fi';

const Downloads = () => {
  const { language } = useSelector((state) => state.language);
  const currentLanguage = language || 'ar';

  const downloads = [
    { title: { ar: 'الكتيب المدرسي ٢٠٢٤-٢٠٢٥', fr: 'Brochure de l\'école 2024-2025', en: 'School Brochure 2024-2025' }, link: '#', size: '5.2 MB' },
    { title: { ar: 'دليل المناهج الدراسية', fr: 'Guide du curriculum', en: 'Curriculum Guide' }, link: '#', size: '3.1 MB' },
    { title: { ar: 'خريطة الحرم الجامعي', fr: 'Plan du campus', en: 'Campus Map' }, link: '#', size: '1.5 MB' },
  ];

  const pageTitle = { ar: 'تنزيلات', fr: 'Téléchargements', en: 'Downloads' };
  const pageDescription = { ar: 'ابحث عن المستندات والموارد الهامة الأخرى هنا.', fr: 'Trouvez d\'autres documents et ressources importants ici.', en: 'Find other important documents and resources here.' };
  const download = { ar: 'تنزيل', fr: 'Télécharger', en: 'Download' };

  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <FiDownloadCloud className="mx-auto text-5xl text-brand dark:text-brand-light mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">{pageTitle[currentLanguage]}</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{pageDescription[currentLanguage]}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {downloads.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 flex items-center justify-between"
              >
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <FiFile className="text-gray-500" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.title[currentLanguage]}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.size}</p>
                  </div>
                </div>
                <a href={item.link} download className="text-brand dark:text-brand-light hover:underline flex items-center">
                  {download[currentLanguage]}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
