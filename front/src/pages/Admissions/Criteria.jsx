import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../store/languageSlice';
import Card, { CardBody, CardHeader } from '../../components/Card';

const Criteria = () => {
  const currentLanguage = useSelector(selectLanguage);

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">
          {currentLanguage === 'ar' ? 'معايير القبول' : currentLanguage === 'fr' ? 'Critères d\'admission' : 'Admissions Criteria'}
        </h2>
      </CardHeader>
      <CardBody>
        <ul className="list-disc list-inside">
          <li>{currentLanguage === 'ar' ? 'السجل الأكاديمي السابق' : currentLanguage === 'fr' ? 'Dossier académique précédent' : 'Previous academic record'}</li>
          <li>{currentLanguage === 'ar' ? 'خطابات التوصية' : currentLanguage === 'fr' ? 'Lettres de recommandation' : 'Letters of recommendation'}</li>
          <li>{currentLanguage === 'ar' ? 'المشاركة في الأنشطة اللاصفية' : currentLanguage === 'fr' ? 'Participation aux activités extrascolaires' : 'Extracurricular involvement'}</li>
        </ul>
      </CardBody>
    </Card>
  );
};

export default Criteria;
