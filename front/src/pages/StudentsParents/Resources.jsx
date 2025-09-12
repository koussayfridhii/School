import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../store/languageSlice';
import Card, { CardBody, CardHeader } from '../../components/Card';

const Resources = () => {
  const currentLanguage = useSelector(selectLanguage);

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">
          {currentLanguage === 'ar' ? 'موارد أولياء الأمور' : currentLanguage === 'fr' ? 'Ressources pour les parents' : 'Parent Resources'}
        </h2>
      </CardHeader>
      <CardBody>
        <ul className="list-disc list-inside">
          <li>{currentLanguage === 'ar' ? 'دليل الطالب' : currentLanguage === 'fr' ? 'Manuel de l\'étudiant' : 'Student Handbook'}</li>
          <li>{currentLanguage === 'ar' ? 'التقويم المدرسي' : currentLanguage === 'fr' ? 'Calendrier scolaire' : 'School Calendar'}</li>
          <li>{currentLanguage === 'ar' ? 'سياسات المدرسة' : currentLanguage === 'fr' ? 'Politiques de l\'école' : 'School Policies'}</li>
        </ul>
      </CardBody>
    </Card>
  );
};

export default Resources;
