import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../store/languageSlice';
import Card, { CardBody, CardHeader } from '../../components/Card';

const Accreditations = () => {
  const currentLanguage = useSelector(selectLanguage);

  const accreditations = [
    { name: { ar: 'وزارة التربية والتعليم', fr: 'Ministère de l\'Éducation', en: 'Ministry of Education' } },
    { name: { ar: 'الاعتماد الدولي للمدارس (CIS)', fr: 'Council of International Schools (CIS)', en: 'Council of International Schools (CIS)' } },
  ];

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">
          {currentLanguage === 'ar' ? 'الاعتمادات' : currentLanguage === 'fr' ? 'Accréditations' : 'Accreditations'}
        </h2>
      </CardHeader>
      <CardBody>
        <p className="mb-4">
          {currentLanguage === 'ar' ? 'نحن فخورون بحصولنا على الاعتماد من الهيئات التعليمية الرائدة.' : currentLanguage === 'fr' ? 'Nous sommes fiers d\'être accrédités par des organismes éducatifs de premier plan.' : 'We are proud to be accredited by leading educational bodies.'}
        </p>
        <ul className="list-disc list-inside">
          {accreditations.map(acc => (
            <li key={acc.name.en}>{acc.name[currentLanguage]}</li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
};

export default Accreditations;
