import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  const { language } = useSelector((state) => state.language);
  const currentLanguage = language || 'ar';

  const content = {
    title: { ar: 'سياسة الخصوصية', fr: 'Politique de confidentialité', en: 'Privacy Policy' },
    lastUpdated: { ar: 'آخر تحديث: ٢١ أغسطس ٢٠٢٥', fr: 'Dernière mise à jour : 21 août 2025', en: 'Last Updated: August 21, 2025' },
    sections: [
      {
        title: { ar: 'مقدمة', fr: 'Introduction', en: 'Introduction' },
        text: { ar: 'تصف سياسة الخصوصية هذه كيفية جمع معلوماتك واستخدامها ومشاركتها عند زيارتك لموقعنا.', fr: 'Cette politique de confidentialité décrit comment vos informations sont collectées, utilisées et partagées lorsque vous visitez notre site Web.', en: 'This Privacy Policy describes how your information is collected, used, and shared when you visit our website.' },
      },
      {
        title: { ar: 'المعلومات التي نجمعها', fr: 'Informations que nous collectons', en: 'Information We Collect' },
        text: { ar: 'نقوم بجمع المعلومات التي تقدمها مباشرة إلينا، مثل عند إنشاء حساب أو ملء نموذج. قد نقوم أيضًا بجمع معلومات تلقائيًا حول استخدامك للموقع.', fr: 'Nous collectons les informations que vous nous fournissez directement, par exemple lorsque vous créez un compte ou remplissez un formulaire. Nous pouvons également collecter automatiquement des informations sur votre utilisation du site.', en: 'We collect information you provide directly to us, such as when you create an account or fill out a form. We may also automatically collect information about your use of the site.' },
      },
      {
        title: { ar: 'كيف نستخدم معلوماتك', fr: 'Comment nous utilisons vos informations', en: 'How We Use Your Information' },
        text: { ar: 'نستخدم المعلومات التي نجمعها لتوفير خدماتنا وتحسينها، وللتواصل معك، ولأغراض أمنية.', fr: 'Nous utilisons les informations que nous collectons pour fournir et améliorer nos services, pour communiquer avec vous et à des fins de sécurité.', en: 'We use the information we collect to provide and improve our services, to communicate with you, and for security purposes.' },
      },
    ],
  };

  return (
    <div className="py-12 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">{content.title[currentLanguage]}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{content.lastUpdated[currentLanguage]}</p>
          <div className="mt-8 space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            {content.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{section.title[currentLanguage]}</h2>
                <p className="mt-2">{section.text[currentLanguage]}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
