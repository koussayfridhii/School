import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const { language } = useSelector((state) => state.language);
  const currentLanguage = language || 'ar';

  const quickLinks = [
    { name: { ar: 'الأكاديميون', fr: 'Académique', en: 'Academics' }, path: '/academics' },
    { name: { ar: 'القبول', fr: 'Admissions', en: 'Admissions' }, path: '/admissions' },
    { name: { ar: 'الوظائف', fr: 'Carrières', en: 'Careers' }, path: '/faculty/careers' },
    { name: { ar: 'سياسة الخصوصية', fr: 'Confidentialité', en: 'Privacy Policy' }, path: '/privacy-policy' },
  ];

  const contactInfo = {
    address: { ar: '١٢٣ شارع المعرفة، المدينة التعليمية، الرياض', fr: '123 Rue de la Connaissance, Cité de l\'Éducation, Riyad', en: '123 Knowledge St, Education City, Riyadh' },
    phone: { ar: '+٩٦٦ ١٢ ٣٤٥ ٦٧٨٩', fr: '+966 12 345 6789', en: '+966 12 345 6789' },
    email: { ar: 'info@alnasser.edu.sa', fr: 'info@alnasser.edu.sa', en: 'info@alnasser.edu.sa' },
  };

  const socialIcons = [
    { icon: <FaFacebookF />, href: '#' },
    { icon: <FaTwitter />, href: '#' },
    { icon: <FaInstagram />, href: '#' },
    { icon: <FaLinkedinIn />, href: '#' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <div className="container mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold text-brand dark:text-white mb-4">
              {currentLanguage === 'ar' ? 'مدارس النصر الخاصة' : 'Al Nasser Private Schools'}
            </h3>
            <p className="text-sm leading-relaxed">
              {currentLanguage === 'ar' ? 'نلتزم بتقديم تعليم عالي الجودة يلهم طلابنا لتحقيق إمكاناتهم الكاملة في بيئة آمنة وداعمة.' : currentLanguage === 'fr' ? 'Engagés à fournir une éducation de qualité qui inspire nos élèves à atteindre leur plein potentiel dans un environnement sûr et favorable.' : 'Committed to providing quality education that inspires our students to achieve their full potential in a safe and supportive environment.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{currentLanguage === 'ar' ? 'روابط سريعة' : currentLanguage === 'fr' ? 'Liens Rapides' : 'Quick Links'}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-brand dark:hover:text-brand-light transition-colors duration-300">
                    {link.name[currentLanguage]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{currentLanguage === 'ar' ? 'اتصل بنا' : currentLanguage === 'fr' ? 'Contactez-Nous' : 'Contact Us'}</h3>
            <address className="not-italic space-y-2">
              <p>{contactInfo.address[currentLanguage]}</p>
              <p>{contactInfo.phone[currentLanguage]}</p>
              <p>
                <a href={`mailto:${contactInfo.email[currentLanguage]}`} className="hover:text-brand dark:hover:text-brand-light transition-colors duration-300">
                  {contactInfo.email[currentLanguage]}
                </a>
              </p>
            </address>
          </div>

          {/* Social Media */}
          <div className="sm:col-span-2 lg:col-span-1">
             <h3 className="text-lg font-semibold mb-4">{currentLanguage === 'ar' ? 'تابعنا' : currentLanguage === 'fr' ? 'Suivez-Nous' : 'Follow Us'}</h3>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <a key={index} href={social.href} className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:bg-brand hover:text-white dark:hover:bg-brand-light dark:hover:text-gray-900 transition-all duration-300">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} {currentLanguage === 'ar' ? 'مدارس النصر الخاصة. جميع الحقوق محفوظة.' : currentLanguage === 'fr' ? 'Écoles Privées Al Nasser. Tous droits réservés.' : 'Al Nasser Private Schools. All Rights Reserved.'}
          </p>
          <p className="mt-4 sm:mt-0">
            {currentLanguage === 'ar' ? 'صنع بحب بواسطة جول' : currentLanguage === 'fr' ? 'Fait avec ❤️ par Jules' : 'Made with ❤️ by Jules'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
