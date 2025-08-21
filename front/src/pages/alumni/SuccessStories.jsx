import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Card, { CardBody } from '../../components/ui/Card';
import { FiAward } from 'react-icons/fi';

const SuccessStories = () => {
  const { language } = useSelector((state) => state.language);
  const currentLanguage = language || 'ar';

  const stories = [
    {
      name: 'Khalid Al-Saud',
      graduationYear: 2015,
      achievement: { ar: 'مؤسس شركة ناشئة في مجال التكنولوجيا', fr: 'Fondateur d\'une startup technologique', en: 'Founder of a Tech Startup' },
      story: { ar: 'استخدم خالد المهارات التي تعلمها في مدرستنا لإطلاق شركة برمجيات ناجحة.', fr: 'Khalid a utilisé les compétences acquises dans notre école pour lancer une entreprise de logiciels prospère.', en: 'Khalid used the skills he learned at our school to launch a successful software company.' },
      image: 'https://via.placeholder.com/300x300/0D47A1/FFFFFF?text=Khalid+A.',
    },
    {
      name: 'Noura Al-Fahad',
      graduationYear: 2018,
      achievement: { ar: 'باحثة طبية مشهورة', fr: 'Chercheuse médicale renommée', en: 'Renowned Medical Researcher' },
      story: { ar: 'تجري نورة أبحاثًا رائدة في مجال علم الوراثة في إحدى الجامعات الرائدة.', fr: 'Noura mène des recherches de pointe en génétique dans une grande université.', en: 'Noura is conducting groundbreaking research in genetics at a leading university.' },
      image: 'https://via.placeholder.com/300x300/1976D2/FFFFFF?text=Noura+A.',
    },
  ];

  const pageTitle = { ar: 'قصص النجاح', fr: 'Histoires de réussite', en: 'Success Stories' };

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
            <FiAward className="mx-auto text-5xl text-brand dark:text-brand-light mb-4" />
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">{pageTitle[currentLanguage]}</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full">
                <div className="p-6 text-center">
                  <img src={story.image} alt={story.name} className="w-32 h-32 rounded-full mx-auto shadow-lg" />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-4">{story.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400">Class of {story.graduationYear}</p>
                </div>
                <CardBody className="text-center">
                  <p className="font-semibold text-brand dark:text-brand-light">{story.achievement[currentLanguage]}</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">{story.story[currentLanguage]}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
