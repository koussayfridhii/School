import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../store/languageSlice';
import Card, { CardBody, CardHeader } from '../../components/Card';

const VirtualTour = () => {
  const currentLanguage = useSelector(selectLanguage);

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">
          {currentLanguage === 'ar' ? 'جولة افتراضية' : currentLanguage === 'fr' ? 'Visite virtuelle' : 'Virtual Tour'}
        </h2>
      </CardHeader>
      <CardBody>
        <p className="mb-4">
          {currentLanguage === 'ar' ? 'قم بجولة افتراضية في حرمنا الجامعي ومرافقنا الحديثة.' : currentLanguage === 'fr' ? 'Faites une visite virtuelle de notre campus et de nos installations de pointe.' : 'Take a virtual tour of our campus and state-of-the-art facilities.'}
        </p>
        <div className="aspect-w-16 aspect-h-9 bg-gray-300 dark:bg-gray-700">
          {/* Placeholder for video */}
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">{currentLanguage === 'ar' ? 'الفيديو قادم قريبا' : currentLanguage === 'fr' ? 'Vidéo à venir' : 'Video coming soon'}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default VirtualTour;
