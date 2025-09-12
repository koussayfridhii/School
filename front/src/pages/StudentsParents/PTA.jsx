import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../store/languageSlice';
import Card, { CardBody, CardHeader } from '../../components/Card';

const PTA = () => {
  const currentLanguage = useSelector(selectLanguage);

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">
          {currentLanguage === 'ar' ? 'مجلس الآباء والمعلمين' : currentLanguage === 'fr' ? 'Association parents-enseignants' : 'Parent-Teacher Association (PTA)'}
        </h2>
      </CardHeader>
      <CardBody>
        <p>
          {currentLanguage === 'ar' ? 'يعد مجلس الآباء والمعلمين جزءًا حيويًا من مجتمع مدرستنا. تعرف على المزيد حول كيفية المشاركة.' : currentLanguage === 'fr' ? 'Notre APE est une partie vitale de notre communauté scolaire. Apprenez-en plus sur la façon de vous impliquer.' : 'Our PTA is a vital part of our school community. Learn more about how to get involved.'}
        </p>
      </CardBody>
    </Card>
  );
};

export default PTA;
