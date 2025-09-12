import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../store/languageSlice';
import Card, { CardBody, CardHeader } from '../../components/Card';
import Button from '../../components/Button';

const Downloads = () => {
  const currentLanguage = useSelector(selectLanguage);

  const downloads = [
    { name: { ar: 'الكتيب المدرسي', fr: 'Brochure de l\'école', en: 'School Brochure' }, file: '#' },
    { name: { ar: 'التقرير السنوي', fr: 'Rapport annuel', en: 'Annual Report' }, file: '#' },
  ];

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">
          {currentLanguage === 'ar' ? 'التنزيلات' : currentLanguage === 'fr' ? 'Téléchargements' : 'Downloads'}
        </h2>
      </CardHeader>
      <CardBody>
        <div className="space-y-4">
          {downloads.map(item => (
            <div key={item.name.en} className="p-4 border rounded-lg flex justify-between items-center">
              <h3 className="text-lg">{item.name[currentLanguage]}</h3>
              <a href={item.file} download>
                <Button variant="outline">
                  {currentLanguage === 'ar' ? 'تنزيل' : currentLanguage === 'fr' ? 'Télécharger' : 'Download'}
                </Button>
              </a>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default Downloads;
