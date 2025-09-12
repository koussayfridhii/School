import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../store/languageSlice';
import Card, { CardBody, CardHeader } from '../../components/Card';

const Facilities = () => {
  const currentLanguage = useSelector(selectLanguage);

  const facilities = [
    { name: { ar: 'مكتبة حديثة', fr: 'Bibliothèque moderne', en: 'Modern Library' } },
    { name: { ar: 'مختبرات علوم مجهزة بالكامل', fr: 'Laboratoires de sciences entièrement équipés', en: 'Fully-equipped Science Labs' } },
    { name: { ar: 'مرافق رياضية', fr: 'Installations sportives', en: 'Sports Facilities' } },
    { name: { ar: 'استوديو فني', fr: 'Studio d\'art', en: 'Art Studio' } },
  ];

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">
          {currentLanguage === 'ar' ? 'نظرة عامة على المرافق' : currentLanguage === 'fr' ? 'Aperçu des installations' : 'Facilities Overview'}
        </h2>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {facilities.map(facility => (
            <div key={facility.name.en} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <div className="w-full h-32 bg-gray-300 dark:bg-gray-600 mb-4 rounded"></div>
              <h3 className="text-lg font-semibold text-center">{facility.name[currentLanguage]}</h3>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default Facilities;
