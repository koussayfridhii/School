import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../store/languageSlice';
import Hero from '../components/Hero';
import Card, { CardBody, CardHeader } from '../components/Card';
import Button from '../components/Button';

const Home = () => {
  const currentLanguage = useSelector(selectLanguage);

  return (
    <div>
      <Hero
        title={currentLanguage === 'ar' ? 'مرحباً بكم في مدارس النصر الخاصة' : currentLanguage === 'fr' ? 'Bienvenue aux Écoles Privées Al Nasser' : 'Welcome to Al Nasser Private Schools'}
        subtitle={currentLanguage === 'ar' ? 'نحو مستقبل مشرق' : currentLanguage === 'fr' ? 'Vers un avenir brillant' : 'Towards a Bright Future'}
      />
      <div className="container mx-auto p-4 grid md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <h2 className="text-xl font-bold">{currentLanguage === 'ar' ? 'رسالتنا' : currentLanguage === 'fr' ? 'Notre Mission' : 'Our Mission'}</h2>
          </CardHeader>
          <CardBody>
            <p>{currentLanguage === 'ar' ? 'تقديم تعليم عالي الجودة يمكّن الطلاب من تحقيق إمكاناتهم الكاملة.' : currentLanguage === 'fr' ? 'Fournir une éducation de haute qualité qui permet aux étudiants d’atteindre leur plein potentiel.' : 'To provide high-quality education that empowers students to reach their full potential.'}</p>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h2 className="text-xl font-bold">{currentLanguage === 'ar' ? 'آخر الأخبار' : currentLanguage === 'fr' ? 'Dernières Nouvelles' : 'Latest News'}</h2>
          </CardHeader>
          <CardBody>
            <p>{currentLanguage === 'ar' ? 'تم فتح باب القبول للعام الدراسي الجديد.' : currentLanguage === 'fr' ? 'Les inscriptions pour la nouvelle année scolaire sont maintenant ouvertes.' : 'Admissions for the new academic year are now open.'}</p>
            <Button className="mt-4">{currentLanguage === 'ar' ? 'اقرأ المزيد' : currentLanguage === 'fr' ? 'Lire la suite' : 'Read More'}</Button>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h2 className="text-xl font-bold">{currentLanguage === 'ar' ? 'الأحداث القادمة' : currentLanguage === 'fr' ? 'Événements à venir' : 'Upcoming Events'}</h2>
          </CardHeader>
          <CardBody>
            <p>{currentLanguage === 'ar' ? 'اليوم المفتوح لأولياء الأمور - 25 سبتمبر' : currentLanguage === 'fr' ? 'Journée portes ouvertes pour les parents - 25 septembre' : 'Parents Open Day - September 25th'}</p>
            <Button className="mt-4">{currentLanguage === 'ar' ? 'عرض التقويم' : currentLanguage === 'fr' ? 'Voir le calendrier' : 'View Calendar'}</Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Home;
