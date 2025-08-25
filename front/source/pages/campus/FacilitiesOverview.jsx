import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FiWifi, FiThermometer, FiBook, FiCpu, FiPlusSquare, FiMusic } from 'react-icons/fi';

const FacilitiesOverview = () => {
  const { language } = useSelector((state) => state.language);
  const currentLanguage = language || 'ar';

  const facilities = [
    {
      icon: <FiCpu size={32} className="text-brand dark:text-brand-light" />,
      title: { ar: 'مختبرات العلوم الحديثة', fr: 'Laboratoires de sciences modernes', en: 'Modern Science Labs' },
      description: { ar: 'مجهزة بأحدث التقنيات لتسهيل التعلم العملي.', fr: 'Équipé des dernières technologies pour faciliter l\'apprentissage pratique.', en: 'Equipped with the latest technology to facilitate hands-on learning.' },
      image: 'https://via.placeholder.com/400x300/BFDBFE/1E3A8A?text=Science+Lab',
    },
    {
      icon: <FiBook size={32} className="text-brand dark:text-brand-light" />,
      title: { ar: 'مكتبة واسعة', fr: 'Bibliothèque Complète', en: 'Comprehensive Library' },
      description: { ar: 'مجموعة واسعة من الكتب والموارد الرقمية ومساحات دراسة هادئة.', fr: 'Une vaste collection de livres, de ressources numériques et d\'espaces d\'étude calmes.', en: 'A vast collection of books, digital resources, and quiet study spaces.' },
      image: 'https://via.placeholder.com/400x300/93C5FD/1E3A8A?text=Library',
    },
    {
      icon: <FiPlusSquare size={32} className="text-brand dark:text-brand-light" />,
      title: { ar: 'مرافق رياضية', fr: 'Installations sportives', en: 'Sports Facilities' },
      description: { ar: 'ملعب كرة قدم وملعب كرة سلة وصالة رياضية داخلية.', fr: 'Un terrain de football, un terrain de basket et un gymnase intérieur.', en: 'A football field, basketball court, and an indoor gymnasium.' },
      image: 'https://via.placeholder.com/400x300/60A5FA/1E3A8A?text=Sports',
    },
    {
      icon: <FiMusic size={32} className="text-brand dark:text-brand-light" />,
      title: { ar: 'استوديوهات الفنون والموسيقى', fr: 'Studios d\'art et de musique', en: 'Art & Music Studios' },
      description: { ar: 'مساحات مخصصة للطلاب لاستكشاف إبداعهم في الفنون البصرية والموسيقى.', fr: 'Espaces dédiés aux étudiants pour explorer leur créativité dans les arts visuels et la musique.', en: 'Dedicated spaces for students to explore their creativity in visual arts and music.' },
      image: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Art+Studio',
    },
  ];

  const pageTitle = {
      ar: 'نظرة عامة على المرافق',
      fr: 'Aperçu des Installations',
      en: 'Facilities Overview'
  };

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">{pageTitle[currentLanguage]}</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group"
            >
              <div className="overflow-hidden">
                <img src={facility.image} alt={facility.title[currentLanguage]} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"/>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
                  <div className="flex-shrink-0 bg-primary-100 dark:bg-brand/20 p-3 rounded-full">{facility.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{facility.title[currentLanguage]}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{facility.description[currentLanguage]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacilitiesOverview;
