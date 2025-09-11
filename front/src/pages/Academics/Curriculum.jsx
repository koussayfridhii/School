import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../store/languageSlice';
import Card, { CardBody, CardHeader } from '../../components/Card';

const Curriculum = () => {
  const currentLanguage = useSelector(selectLanguage);

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">
          {currentLanguage === 'ar' ? 'نظرة عامة على المنهج' : currentLanguage === 'fr' ? 'Aperçu du curriculum' : 'Curriculum Overview'}
        </h2>
      </CardHeader>
      <CardBody>
        <p>
          {currentLanguage === 'ar' ? 'نحن نقدم منهجًا شاملاً يركز على التميز الأكاديمي والتنمية الشخصية.' : currentLanguage === 'fr' ? 'Nous offrons un curriculum complet axé sur l\'excellence académique et le développement personnel.' : 'We offer a comprehensive curriculum focused on academic excellence and personal development.'}
        </p>
      </CardBody>
    </Card>
  );
};

export default Curriculum;
