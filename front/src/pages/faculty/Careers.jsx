import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import { FiBriefcase, FiMapPin, FiClock } from 'react-icons/fi';

const Careers = () => {
  const { language } = useSelector((state) => state.language);
  const currentLanguage = language || 'ar';

  const openings = [
    {
      title: { ar: 'مدرس رياضيات للمرحلة الثانوية', fr: 'Enseignant de mathématiques au lycée', en: 'High School Math Teacher' },
      location: { ar: 'الرياض، المملكة العربية السعودية', fr: 'Riyad, Arabie Saoudite', en: 'Riyadh, Saudi Arabia' },
      type: { ar: 'دوام كامل', fr: 'Temps plein', en: 'Full-time' },
    },
    {
      title: { ar: 'مدرس لغة إنجليزية للمرحلة الابتدائية', fr: 'Enseignant d\'anglais au primaire', en: 'Primary School English Teacher' },
      location: { ar: 'الرياض، المملكة العربية السعودية', fr: 'Riyad, Arabie Saoudite', en: 'Riyadh, Saudi Arabia' },
      type: { ar: 'دوام كامل', fr: 'Temps plein', en: 'Full-time' },
    },
  ];

  const pageTitle = { ar: 'الوظائف المتاحة', fr: 'Postes vacants', en: 'Current Openings' };
  const joinUs = { ar: 'انضم إلى فريقنا', fr: 'Rejoignez notre équipe', en: 'Join Our Team' };
  const joinUsDesc = { ar: 'نحن نبحث دائمًا عن أفراد موهوبين ومتحمسين للانضمام إلى فريقنا. استكشف فرصنا المتاحة.', fr: 'Nous sommes toujours à la recherche de personnes talentueuses et passionnées pour rejoindre notre équipe. Découvrez nos opportunités actuelles.', en: 'We are always looking for talented and passionate individuals to join our team. Explore our current openings.' };
  const applyNow = { ar: 'قدم الآن', fr: 'Postuler', en: 'Apply Now' };
  const noOpenings = { ar: 'لا توجد وظائف شاغرة حاليًا، ولكننا نقبل دائمًا السير الذاتية.', fr: 'Aucun poste n\'est vacant pour le moment, mais nous acceptons toujours les CV.', en: 'No current openings, but we always accept resumes.' };

  return (
    <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <FiBriefcase className="mx-auto text-5xl text-brand dark:text-brand-light mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">{joinUs[currentLanguage]}</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{joinUsDesc[currentLanguage]}</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">{pageTitle[currentLanguage]}</h2>
          {openings.length > 0 ? (
            <div className="space-y-6">
              {openings.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="p-6 border dark:border-gray-700 rounded-lg flex flex-col md:flex-row justify-between md:items-center"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-brand dark:text-brand-light">{job.title[currentLanguage]}</h3>
                    <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-gray-500 dark:text-gray-400 mt-2">
                        <span className="flex items-center"><FiMapPin className="ltr:mr-1 rtl:ml-1"/> {job.location[currentLanguage]}</span>
                        <span className="flex items-center"><FiClock className="ltr:mr-1 rtl:ml-1"/> {job.type[currentLanguage]}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Button>{applyNow[currentLanguage]}</Button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 dark:text-gray-300">{noOpenings[currentLanguage]}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Careers;
