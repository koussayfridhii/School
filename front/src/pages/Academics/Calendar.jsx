import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../store/languageSlice';
import Card, { CardBody, CardHeader } from '../../components/Card';

const Calendar = () => {
  const currentLanguage = useSelector(selectLanguage);

  const events = [
    { date: '2024-09-01', event: { ar: 'بداية العام الدراسي', fr: 'Début de l\'année scolaire', en: 'Start of School Year' } },
    { date: '2024-12-20', event: { ar: 'عطلة الشتاء', fr: 'Vacances d\'hiver', en: 'Winter Break' } },
    { date: '2025-06-15', event: { ar: 'نهاية العام الدراسي', fr: 'Fin de l\'année scolaire', en: 'End of School Year' } },
  ];

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">
          {currentLanguage === 'ar' ? 'التقويم الأكاديمي' : currentLanguage === 'fr' ? 'Calendrier académique' : 'Academic Calendar'}
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

export default Calendar;
