import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../store/languageSlice';
import Card, { CardBody, CardHeader } from '../../components/Card';

const EventCalendar = () => {
  const currentLanguage = useSelector(selectLanguage);

  const events = [
    { date: '2024-09-25', event: { ar: 'اليوم المفتوح لأولياء الأمور', fr: 'Journée portes ouvertes pour les parents', en: 'Parents Open Day' } },
    { date: '2024-10-10', event: { ar: 'معرض العلوم', fr: 'Foire scientifique', en: 'Science Fair' } },
  ];

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">
          {currentLanguage === 'ar' ? 'تقويم الأحداث' : currentLanguage === 'fr' ? 'Calendrier des événements' : 'Event Calendar'}
        </h2>
      </CardHeader>
      <CardBody>
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">{currentLanguage === 'ar' ? 'التاريخ' : currentLanguage === 'fr' ? 'Date' : 'Date'}</th>
              <th className="text-left p-2">{currentLanguage === 'ar' ? 'الحدث' : currentLanguage === 'fr' ? 'Événement' : 'Event'}</th>
            </tr>
          </thead>
          <tbody>
            {events.map(event => (
              <tr key={event.date} className="border-b">
                <td className="p-2">{event.date}</td>
                <td className="p-2">{event.event[currentLanguage]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
};

export default EventCalendar;
