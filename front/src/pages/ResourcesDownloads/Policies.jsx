import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../store/languageSlice';
import Card, { CardBody, CardHeader } from '../../components/Card';

const Policies = () => {
  const currentLanguage = useSelector(selectLanguage);

  const policies = [
    { name: { ar: 'سياسة الحضور', fr: 'Politique de présence', en: 'Attendance Policy' } },
    { name: { ar: 'سياسة الزي المدرسي', fr: 'Politique sur l\'uniforme', en: 'Uniform Policy' } },
  ];

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">
          {currentLanguage === 'ar' ? 'السياسات' : currentLanguage === 'fr' ? 'Politiques' : 'Policies'}
        </h2>
      </CardHeader>
      <CardBody>
        <ul className="list-disc list-inside">
          {policies.map(policy => (
            <li key={policy.name.en}>
              <a href="#" className="text-primary-light dark:text-primary-dark hover:underline">
                {policy.name[currentLanguage]}
              </a>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
};

export default Policies;
