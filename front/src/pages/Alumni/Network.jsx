import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../store/languageSlice';
import Card, { CardBody, CardHeader } from '../../components/Card';
import Button from '../../components/Button';

const Network = () => {
  const currentLanguage = useSelector(selectLanguage);

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">
          {currentLanguage === 'ar' ? 'شبكة الخريجين' : currentLanguage === 'fr' ? 'Réseau des anciens' : 'Alumni Network'}
        </h2>
      </CardHeader>
      <CardBody>
        <p className="mb-4">
          {currentLanguage === 'ar' ? 'انضم إلى شبكتنا للبقاء على اتصال مع زملائك الخريجين.' : currentLanguage === 'fr' ? 'Rejoignez notre réseau pour rester en contact avec d\'autres anciens élèves.' : 'Join our network to stay connected with fellow alumni.'}
        </p>
        <Button>
          {currentLanguage === 'ar' ? 'انضم الآن' : currentLanguage === 'fr' ? 'Rejoindre maintenant' : 'Join Now'}
        </Button>
      </CardBody>
    </Card>
  );
};

export default Network;
