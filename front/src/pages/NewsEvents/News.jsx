import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../store/languageSlice';
import Card, { CardBody, CardHeader } from '../../components/Card';

const News = () => {
  const currentLanguage = useSelector(selectLanguage);

  const newsItems = [
    { title: { ar: 'فوز فريق العلوم بالمركز الأول', fr: 'L\'équipe scientifique remporte la première place', en: 'Science Team Wins First Place' }, date: '2024-09-05' },
    { title: { ar: 'يوم رياضي ناجح', fr: 'Journée sportive réussie', en: 'Successful Sports Day' }, date: '2024-09-02' },
  ];

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">
          {currentLanguage === 'ar' ? 'آخر الأخبار' : currentLanguage === 'fr' ? 'Dernières Nouvelles' : 'Latest News'}
        </h2>
      </CardHeader>
      <CardBody>
        <div className="space-y-4">
          {newsItems.map(item => (
            <div key={item.title.en} className="p-4 border rounded-lg">
              <h3 className="text-lg font-semibold">{item.title[currentLanguage]}</h3>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default News;
