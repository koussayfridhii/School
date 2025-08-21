import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import { FiUsers, FiLink } from 'react-icons/fi';

const AlumniNetwork = () => {
  const { language } = useSelector((state) => state.language);
  const currentLanguage = language || 'ar';

  const content = {
    title: { ar: 'شبكة الخريجين', fr: 'Réseau des anciens', en: 'Alumni Network' },
    description: { ar: 'مرحبًا بعودتك! تواصل مع زملائك الخريجين وابق على اطلاع بآخر أخبار المدرسة.', fr: 'Content de vous revoir ! Connectez-vous avec d\'autres anciens élèves et restez informé des dernières nouvelles de l\'école.', en: 'Welcome back! Connect with fellow alumni and stay updated on the latest school news.' },
    join: { ar: 'انضم إلى شبكتنا على لينكد إن', fr: 'Rejoignez notre réseau LinkedIn', en: 'Join Our LinkedIn Network' },
  };

  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <FiUsers className="mx-auto text-5xl text-brand dark:text-brand-light mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">{content.title[currentLanguage]}</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{content.description[currentLanguage]}</p>
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8"
        >
            <a href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="primary">
                    <FiLink className="inline ltr:mr-2 rtl:ml-2"/>
                    {content.join[currentLanguage]}
                </Button>
            </a>
        </motion.div>
      </div>
    </div>
  );
};

export default AlumniNetwork;
