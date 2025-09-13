import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../store/languageSlice';

const Footer = () => {
  const currentLanguage = useSelector(selectLanguage);

  const quickLinks = [
    { to: "/about", text: { ar: "من نحن", fr: "À propos", en: "About" } },
    { to: "/admissions", text: { ar: "القبول", fr: "Admissions", en: "Admissions" } },
    { to: "/contact", text: { ar: "اتصل بنا", fr: "Contact", en: "Contact" } },
  ];

  const socialLinks = [
    { href: "#", text: "Facebook" },
    { href: "#", text: "Twitter" },
    { href: "#", text: "Instagram" },
  ];

  return (
    <footer className="bg-background text-color-muted">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">
              {currentLanguage === "ar" ? "مدارس النصر الخاصة" : currentLanguage === "fr" ? "Écoles Privées Al Nasser" : "Al Nasser Private Schools"}
            </h3>
            <p>
              {currentLanguage === "ar" ? "بناء مستقبل مشرق لطلابنا." : currentLanguage === "fr" ? "Construire un avenir brillant pour nos étudiants." : "Building a bright future for our students."}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-color-default">
              {currentLanguage === "ar" ? "روابط سريعة" : currentLanguage === "fr" ? "Liens rapides" : "Quick Links"}
            </h3>
            <ul>
              {quickLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-primary">
                    {link.text[currentLanguage]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-color-default">
              {currentLanguage === "ar" ? "تابعنا" : currentLanguage === "fr" ? "Suivez-nous" : "Follow Us"}
            </h3>
            <ul>
              {socialLinks.map(link => (
                <li key={link.text}>
                  <a href={link.href} className="hover:text-primary">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 border-t border-color-muted/20 pt-4">
          <p>&copy; {new Date().getFullYear()} {currentLanguage === "ar" ? "مدارس النصر الخاصة. جميع الحقوق محفوظة." : currentLanguage === "fr" ? "Écoles Privées Al Nasser. Tous droits réservés." : "Al Nasser Private Schools. All Rights Reserved."}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
