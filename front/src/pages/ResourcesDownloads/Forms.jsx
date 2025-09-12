import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../store/languageSlice';
import Card, { CardBody, CardHeader } from '../../components/Card';
import Button from '../../components/Button';

const Forms = () => {
  const currentLanguage = useSelector(selectLanguage);

  const forms = [
    { name: { ar: 'نموذج التسجيل', fr: 'Formulaire d\'inscription', en: 'Registration Form' }, file: '#' },
    { name: { ar: 'نموذج طبي', fr: 'Formulaire médical', en: 'Medical Form' }, file: '#' },
  ];

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">
          {currentLanguage === 'ar' ? 'مكتبة النماذج' : currentLanguage === 'fr' ? 'Bibliothèque de formulaires' : 'Forms Library'}
        </h2>
      </CardHeader>
      <CardBody>
        <div className="space-y-4">
          {forms.map(form => (
            <div key={form.name.en} className="p-4 border rounded-lg flex justify-between items-center">
              <h3 className="text-lg">{form.name[currentLanguage]}</h3>
              <a href={form.file} download>
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

export default Forms;
