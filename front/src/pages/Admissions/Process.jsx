import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../store/languageSlice';
import Card, { CardBody, CardHeader } from '../../components/Card';

const Process = () => {
  const currentLanguage = useSelector(selectLanguage);

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">
          {currentLanguage === 'ar' ? 'عملية القبول' : currentLanguage === 'fr' ? 'Processus d\'admission' : 'Admissions Process'}
        </h2>
      </CardHeader>
      <CardBody>
        <ol className="list-decimal list-inside">
          <li>{currentLanguage === 'ar' ? 'تقديم طلب عبر الإنترنت' : currentLanguage === 'fr' ? 'Soumettre la candidature en ligne' : 'Submit online application'}</li>
          <li>{currentLanguage === 'ar' ? 'مقابلة الطالب' : currentLanguage === 'fr' ? 'Entretien avec l\'étudiant' : 'Student interview'}</li>
          <li>{currentLanguage === 'ar' ? 'قرار القبول' : currentLanguage === 'fr' ? 'Décision d\'admission' : 'Admission decision'}</li>
        </ol>
      </CardBody>
    </Card>
  );
};

export default Process;
