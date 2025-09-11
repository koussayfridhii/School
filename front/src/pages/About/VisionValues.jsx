import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../store/languageSlice';
import Card, { CardBody, CardHeader } from '../../components/Card';

const VisionValues = () => {
  const currentLanguage = useSelector(selectLanguage);

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">
          {currentLanguage === 'ar' ? 'الرؤية والقيم' : currentLanguage === 'fr' ? 'Vision & Valeurs' : 'Vision & Values'}
        </h2>
      </CardHeader>
      <CardBody>
        <h3 className="text-xl font-semibold mb-2">{currentLanguage === 'ar' ? 'رؤيتنا' : currentLanguage === 'fr' ? 'Notre Vision' : 'Our Vision'}</h3>
        <p className="mb-4">
          {currentLanguage === 'ar' ? 'أن نكون روادًا في التعليم، ونلهم الطلاب ليصبحوا متعلمين مدى الحياة وقادة في مجتمعاتهم.' : currentLanguage === 'fr' ? 'Être un leader dans l\'éducation, inspirant les étudiants à devenir des apprenants tout au long de la vie et des leaders dans leurs communautés.' : 'To be a leader in education, inspiring students to become lifelong learners and leaders in their communities.'}
        </p>
        <h3 className="text-xl font-semibold mb-2">{currentLanguage === 'ar' ? 'قيمنا' : currentLanguage === 'fr' ? 'Nos Valeurs' : 'Our Values'}</h3>
        <ul className="list-disc list-inside">
          <li>{currentLanguage === 'ar' ? 'التميز' : currentLanguage === 'fr' ? 'Excellence' : 'Excellence'}</li>
          <li>{currentLanguage === 'ar' ? 'النزاهة' : currentLanguage === 'fr' ? 'Intégrité' : 'Integrity'}</li>
          <li>{currentLanguage === 'ar' ? 'الاحترام' : currentLanguage === 'fr' ? 'Respect' : 'Respect'}</li>
          <li>{currentLanguage === 'ar' ? 'المسؤولية' : currentLanguage === 'fr' ? 'Responsabilité' : 'Responsibility'}</li>
        </ul>
      </CardBody>
    </Card>
  );
};

export default VisionValues;
