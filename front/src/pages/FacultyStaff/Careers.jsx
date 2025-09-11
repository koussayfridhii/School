import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../store/languageSlice';
import Card, { CardBody, CardHeader } from '../../components/Card';
import Button from '../../components/Button';

const Careers = () => {
  const currentLanguage = useSelector(selectLanguage);

  const openings = [
    { title: { ar: 'مدرس رياضيات', fr: 'Professeur de mathématiques', en: 'Mathematics Teacher' }, type: { ar: 'دوام كامل', fr: 'Temps plein', en: 'Full-time' } },
    { title: { ar: 'مدرس علوم', fr: 'Professeur de sciences', en: 'Science Teacher' }, type: { ar: 'دوام جزئي', fr: 'Temps partiel', en: 'Part-time' } },
  ];

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">
          {currentLanguage === 'ar' ? 'الوظائف' : currentLanguage === 'fr' ? 'Carrières' : 'Careers'}
        </h2>
      </CardHeader>
      <CardBody>
        <p className="mb-4">
          {currentLanguage === 'ar' ? 'انضم إلى فريقنا من المعلمين والموظفين المتفانين.' : currentLanguage === 'fr' ? 'Rejoignez notre équipe d\'éducateurs et de personnel dévoués.' : 'Join our team of dedicated educators and staff.'}
        </p>
        <div className="space-y-4">
          {openings.map(job => (
            <div key={job.title.en} className="p-4 border rounded-lg flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{job.title[currentLanguage]}</h3>
                <p className="text-sm text-gray-500">{job.type[currentLanguage]}</p>
              </div>
              <Button variant="outline">
                {currentLanguage === 'ar' ? 'قدم الآن' : currentLanguage === 'fr' ? 'Postuler' : 'Apply'}
              </Button>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default Careers;
