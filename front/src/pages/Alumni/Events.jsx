import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../store/languageSlice';
import Card, { CardBody, CardHeader } from '../../components/Card';

const Events = () => {
  const currentLanguage = useSelector(selectLanguage);

  const events = [
    { name: { ar: 'لقاء الخريجين السنوي', fr: 'Réunion annuelle des anciens', en: 'Annual Alumni Meet' }, date: '2025-01-15' },
    { name: { ar: 'حفل عشاء الخريجين', fr: 'Dîner de gala des anciens', en: 'Alumni Gala Dinner' }, date: '2025-05-20' },
  ];

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">
          {currentLanguage === 'ar' ? 'أحداث الخريجين' : currentLanguage === 'fr' ? 'Événements des anciens' : 'Alumni Events'}
        </h2>
      </CardHeader>
      <CardBody>
        <div className="space-y-4">
          {events.map(event => (
            <div key={event.name.en} className="p-4 border rounded-lg">
              <h3 className="text-lg font-semibold">{event.name[currentLanguage]}</h3>
              <p className="text-sm text-gray-500">{event.date}</p>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default Events;
