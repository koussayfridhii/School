import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../store/languageSlice';
import Card, { CardBody, CardHeader } from '../../components/Card';

const Programs = () => {
  const currentLanguage = useSelector(selectLanguage);

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">
          {currentLanguage === 'ar' ? 'البرامج' : currentLanguage === 'fr' ? 'Programmes' : 'Programs'}
        </h2>
      </CardHeader>
      <CardBody>
        <ul className="list-disc list-inside">
          <li>{currentLanguage === 'ar' ? 'المرحلة الابتدائية' : currentLanguage === 'fr' ? 'Primaire' : 'Elementary School'}</li>
          <li>{currentLanguage === 'ar' ? 'المرحلة المتوسطة' : currentLanguage === 'fr' ? 'Collège' : 'Middle School'}</li>
          <li>{currentLanguage === 'ar' ? 'المرحلة الثانوية' : currentLanguage === 'fr' ? 'Lycée' : 'High School'}</li>
        </ul>
      </CardBody>
    </Card>
  );
};

export default Programs;
