import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../store/languageSlice';
import Card, { CardBody, CardHeader } from '../../components/Card';

const Profiles = () => {
  const currentLanguage = useSelector(selectLanguage);

  const faculty = [
    { name: 'Mr. John Doe', subject: { ar: 'الرياضيات', fr: 'Mathématiques', en: 'Mathematics' } },
    { name: 'Ms. Jane Smith', subject: { ar: 'العلوم', fr: 'Sciences', en: 'Science' } },
    { name: 'Mr. Ali Khan', subject: { ar: 'اللغة العربية', fr: 'Langue arabe', en: 'Arabic Language' } },
  ];

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">
          {currentLanguage === 'ar' ? 'ملفات هيئة التدريس' : currentLanguage === 'fr' ? 'Profils du corps professoral' : 'Faculty Profiles'}
        </h2>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {faculty.map(member => (
            <div key={member.name} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-center">
              <div className="w-24 h-24 rounded-full bg-gray-300 dark:bg-gray-600 mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{member.subject[currentLanguage]}</p>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default Profiles;
