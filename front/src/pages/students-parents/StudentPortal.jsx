import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { FiLogIn } from 'react-icons/fi';

const StudentPortal = () => {
  const { language } = useSelector((state) => state.language);
  const currentLanguage = language || 'ar';

  const content = {
    title: { ar: 'بوابة الطالب', fr: 'Portail Étudiant', en: 'Student Portal' },
    description: { ar: 'مرحبًا بك في بوابة الطالب. قم بتسجيل الدخول للوصول إلى الدرجات والجداول الزمنية والمزيد.', fr: 'Bienvenue sur le portail étudiant. Connectez-vous pour accéder à vos notes, horaires, et plus encore.', en: 'Welcome to the Student Portal. Log in to access your grades, schedules, and more.' },
    username: { ar: 'اسم المستخدم', fr: 'Nom d\'utilisateur', en: 'Username' },
    password: { ar: 'كلمة المرور', fr: 'Mot de passe', en: 'Password' },
    login: { ar: 'تسجيل الدخول', fr: 'Connexion', en: 'Log In' },
  };

  return (
    <div className="py-16 px-4 bg-gray-50 dark:bg-gray-900 flex items-center justify-center" style={{minHeight: 'calc(100vh - 200px)'}}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md"
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
          <FiLogIn className="mx-auto text-5xl text-brand dark:text-brand-light mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{content.title[currentLanguage]}</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{content.description[currentLanguage]}</p>

          <form className="mt-8 space-y-6 text-left">
            <div>
                <label htmlFor="username" className="sr-only">{content.username[currentLanguage]}</label>
                <Input id="username" name="username" type="text" placeholder={content.username[currentLanguage]} required />
            </div>
            <div>
                <label htmlFor="password" className="sr-only">{content.password[currentLanguage]}</label>
                <Input id="password" name="password" type="password" placeholder={content.password[currentLanguage]} required />
            </div>
            <Button type="submit" variant="primary" className="w-full">
              {content.login[currentLanguage]}
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default StudentPortal;
