import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Card, { CardBody, CardHeader, CardFooter } from '../../components/ui/Card';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';

const News = () => {
  const { language } = useSelector((state) => state.language);
  const currentLanguage = language || 'ar';

  const newsItems = [
    {
      id: 1,
      title: { ar: 'يوم رياضي مثير', fr: 'Journée sportive passionnante', en: 'Exciting Sports Day' },
      date: '2024-10-15',
      summary: { ar: 'شارك طلابنا في يوم مليء بالأنشطة الرياضية والمنافسة الودية.', fr: 'Nos élèves ont participé à une journée remplie d\'activités sportives et de compétition amicale.', en: 'Our students participated in a day full of sports activities and friendly competition.' },
      image: 'https://via.placeholder.com/400x250/0D47A1/FFFFFF?text=Event1',
      category: { ar: 'رياضة', fr: 'Sports', en: 'Sports' },
    },
    {
      id: 2,
      title: { ar: 'معرض العلوم السنوي', fr: 'Foire scientifique annuelle', en: 'Annual Science Fair' },
      date: '2024-11-05',
      summary: { ar: 'عرض الطلاب مشاريعهم العلمية المبتكرة التي أظهرت إبداعهم ومعرفتهم.', fr: 'Les élèves ont présenté leurs projets scientifiques innovants, démontrant leur créativité et leurs connaissances.', en: 'Students showcased their innovative science projects, demonstrating their creativity and knowledge.' },
      image: 'https://via.placeholder.com/400x250/1976D2/FFFFFF?text=Event2',
      category: { ar: 'أكاديمي', fr: 'Académique', en: 'Academics' },
    },
    {
      id: 3,
      title: { ar: 'احتفال اليوم الوطني', fr: 'Célébration de la fête nationale', en: 'National Day Celebration' },
      date: '2024-09-23',
      summary: { ar: 'احتفلنا باليوم الوطني السعودي بأنشطة ثقافية وعروض طلابية.', fr: 'Nous avons célébré la fête nationale saoudienne avec des activités culturelles et des spectacles d\'élèves.', en: 'We celebrated Saudi National Day with cultural activities and student performances.' },
      image: 'https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=Event3',
      category: { ar: 'مجتمع', fr: 'Communauté', en: 'Community' },
    },
    // Add more news items if needed
  ];

  const pageTitle = { ar: 'الأخبار والأحداث', fr: 'Nouvelles et événements', en: 'News & Events' };
  const readMore = { ar: 'اقرأ المزيد', fr: 'Lire la suite', en: 'Read More' };

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">{pageTitle[currentLanguage]}</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <img src={item.image} alt={item.title[currentLanguage]} className="w-full h-48 object-cover"/>
                <CardHeader>
                  <span className="text-sm text-brand dark:text-brand-light font-semibold">{item.category[currentLanguage]}</span>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-2">{item.title[currentLanguage]}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.date}</p>
                </CardHeader>
                <CardBody className="flex-grow">
                  <p className="text-gray-600 dark:text-gray-300">{item.summary[currentLanguage]}</p>
                </CardBody>
                <CardFooter>
                  {/* The link will eventually go to a detailed news page, e.g., /news/1 */}
                  <Link to={`/news`}>
                    <Button variant="outline">{readMore[currentLanguage]}</Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
