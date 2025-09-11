import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../store/languageSlice';
import Card, { CardBody, CardHeader } from '../../components/Card';

const Map = () => {
  const currentLanguage = useSelector(selectLanguage);

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">
          {currentLanguage === 'ar' ? 'موقعنا' : currentLanguage === 'fr' ? 'Notre emplacement' : 'Our Location'}
        </h2>
      </CardHeader>
      <CardBody>
        <div className="aspect-w-16 aspect-h-9 bg-gray-300 dark:bg-gray-700">
          {/* Placeholder for map */}
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">{currentLanguage === 'ar' ? 'خريطة تفاعلية قادمة قريبا' : currentLanguage === 'fr' ? 'Carte interactive à venir' : 'Interactive map coming soon'}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Map;
