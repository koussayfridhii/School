import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../store/languageSlice';
import Card, { CardBody, CardHeader } from '../../components/Card';
import Button from '../../components/Button';

const Portal = () => {
  const currentLanguage = useSelector(selectLanguage);

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">
          {currentLanguage === 'ar' ? 'بوابة الطالب' : currentLanguage === 'fr' ? 'Portail étudiant' : 'Student Portal'}
        </h2>
      </CardHeader>
      <CardBody>
        <p className="mb-4">
          {currentLanguage === 'ar' ? 'قم بالوصول إلى الدرجات والجداول الزمنية والمزيد.' : currentLanguage === 'fr' ? 'Accédez aux notes, aux emplois du temps, et plus encore.' : 'Access grades, schedules, and more.'}
        </p>
        <Button>
          {currentLanguage === 'ar' ? 'تسجيل الدخول إلى البوابة' : currentLanguage === 'fr' ? 'Connexion au portail' : 'Login to Portal'}
        </Button>
      </CardBody>
    </Card>
  );
};

export default Portal;
