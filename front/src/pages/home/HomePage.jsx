import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Card, { CardBody, CardHeader } from '../../components/ui/Card';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

// Placeholder data
const newsItems = [
  {
    id: 1,
    title: { ar: 'يوم رياضي مثير', fr: 'Journée sportive passionnante', en: 'Exciting Sports Day' },
    date: '2024-10-15',
    summary: { ar: 'شارك طلابنا في يوم مليء بالأنشطة الرياضية والمنافسة الودية.', fr: 'Nos élèves ont participé à une journée remplie d\'activités sportives et de compétition amicale.', en: 'Our students participated in a day full of sports activities and friendly competition.' },
    image: 'https://via.placeholder.com/400x250/0D47A1/FFFFFF?text=Event1',
  },
  {
    id: 2,
    title: { ar: 'معرض العلوم السنوي', fr: 'Foire scientifique annuelle', en: 'Annual Science Fair' },
    date: '2024-11-05',
    summary: { ar: 'عرض الطلاب مشاريعهم العلمية المبتكرة التي أظهرت إبداعهم ومعرفتهم.', fr: 'Les élèves ont présenté leurs projets scientifiques innovants, démontrant leur créativité et leurs connaissances.', en: 'Students showcased their innovative science projects, demonstrating their creativity and knowledge.' },
    image: 'https://via.placeholder.com/400x250/1976D2/FFFFFF?text=Event2',
  },
];

const HeroSection = ({ lang }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="bg-primary-50 dark:bg-brand/20"
  >
    <div className="container mx-auto px-4 py-20 md:py-32 text-center">
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold text-brand dark:text-white"
      >
        {lang === 'ar' ? 'أهلاً بكم في مدارس النصر الخاصة' : lang === 'fr' ? 'Bienvenue aux Écoles Privées Al Nasser' : 'Welcome to Al Nasser Private Schools'}
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
      >
        {lang === 'ar' ? 'نصنع قادة المستقبل من خلال التميز الأكاديمي والنمو الشخصي.' : lang === 'fr' ? 'Former les leaders de demain par l\'excellence académique et la croissance personnelle.' : 'Shaping tomorrow\'s leaders through academic excellence and personal growth.'}
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-8 flex justify-center items-center space-x-4 rtl:space-x-reverse"
      >
        <Link to="/admissions/apply-now">
          <Button variant="primary">
            {lang === 'ar' ? 'قدم الآن' : lang === 'fr' ? 'Postulez' : 'Apply Now'}
          </Button>
        </Link>
        <Link to="/about">
          <Button variant="outline">
            {lang === 'ar' ? 'اعرف المزيد' : lang === 'fr' ? 'En savoir plus' : 'Learn More'} <FiArrowRight className="inline rtl:hidden ltr:ml-2" /> <FiArrowRight className="hidden ltr:hidden rtl:mr-2 transform rtl:rotate-180" />
          </Button>
        </Link>
      </motion.div>
    </div>
  </motion.div>
);

const AboutSection = ({ lang }) => (
  <div className="py-16 md:py-24 bg-white dark:bg-gray-800">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <img src="https://via.placeholder.com/500x400/BFDBFE/1E3A8A?text=Our+Campus" alt="School Campus" className="rounded-lg shadow-xl" />
        </motion.div>
        <motion.div className="rtl:text-right" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl font-bold text-brand dark:text-primary-dark mb-4">
            {lang === 'ar' ? 'مجتمع تعليمي نابض بالحياة' : lang === 'fr' ? 'Une communauté d\'apprentissage dynamique' : 'A Vibrant Learning Community'}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {lang === 'ar' ? 'في مدارس النصر، نحن أكثر من مجرد مدرسة؛ نحن مجتمع مكرس لرعاية العقول الشابة، وتعزيز الإبداع، وبناء الشخصية. يوفر منهجنا الشامل وبيئتنا الداعمة للطلاب الأدوات التي يحتاجونها للنجاح في عالم دائم التغير.' : lang === 'fr' ? 'Chez Al Nasser, nous sommes plus qu\'une simple école; nous sommes une communauté dédiée à nourrir les jeunes esprits, à encourager la créativité et à forger le caractère. Notre programme complet et notre environnement favorable donnent aux élèves les outils dont ils ont besoin pour réussir dans un monde en constante évolution.' : 'At Al Nasser, we are more than just a school; we are a community dedicated to nurturing young minds, fostering creativity, and building character. Our comprehensive curriculum and supportive environment give students the tools they need to succeed in an ever-changing world.'}
          </p>
          <Link to="/about/our-story">
            <Button variant="secondary">
              {lang === 'ar' ? 'قصتنا' : lang === 'fr' ? 'Notre Histoire' : 'Our Story'}
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  </div>
);

const NewsSection = ({ lang }) => (
  <div className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-brand dark:text-primary-dark mb-12">
        {lang === 'ar' ? 'آخر الأخبار والأحداث' : lang === 'fr' ? 'Dernières nouvelles et événements' : 'Latest News & Events'}
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {newsItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="h-full">
              <img src={item.image} alt={item.title[lang]} className="w-full h-48 object-cover"/>
              <CardHeader>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{item.title[lang]}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.date}</p>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 dark:text-gray-300">{item.summary[lang]}</p>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/news">
          <Button variant="primary">
            {lang === 'ar' ? 'عرض كل الأخبار' : lang === 'fr' ? 'Voir toutes les nouvelles' : 'View All News'}
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

const HomePage = () => {
  const { language } = useSelector((state) => state.language);
  const currentLanguage = language || 'ar';

  return (
    <div>
      <HeroSection lang={currentLanguage} />
      <AboutSection lang={currentLanguage} />
      <NewsSection lang={currentLanguage} />
    </div>
  );
};

export default HomePage;
