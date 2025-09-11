import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../store/languageSlice';
import Card, { CardBody, CardHeader } from '../../components/Card';

const Leadership = () => {
  const currentLanguage = useSelector(selectLanguage);

  const leaders = [
    { name: 'Dr. Ahmed Al-Mansoori', title: { ar: 'مدير المدرسة', fr: 'Directeur de l\'école', en: 'School Director' } },
    { name: 'Mrs. Fatima Al-Hashemi', title: { ar: 'نائب مدير المدرسة', fr: 'Directrice adjointe', en: 'Deputy Head' } },
  ];

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">
          {currentLanguage === 'ar' ? 'القيادة' : currentLanguage === 'fr' ? 'Direction' : 'Leadership'}
        </h2>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {leaders.map(leader => (
            <div key={leader.name} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center">
              <div className="w-24 h-24 rounded-full bg-gray-300 dark:bg-gray-600 mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold">{leader.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{leader.title[currentLanguage]}</p>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default Leadership;
