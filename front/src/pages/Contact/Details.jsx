import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../store/languageSlice';
import Card, { CardBody, CardHeader } from '../../components/Card';

const Details = () => {
  const currentLanguage = useSelector(selectLanguage);

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">
          {currentLanguage === 'ar' ? 'تفاصيل الاتصال' : currentLanguage === 'fr' ? 'Coordonnées' : 'Contact Details'}
        </h2>
      </CardHeader>
      <CardBody>
        <p><strong>{currentLanguage === 'ar' ? 'العنوان:' : currentLanguage === 'fr' ? 'Adresse:' : 'Address:'}</strong> 123 Education Lane, City, Country</p>
        <p><strong>{currentLanguage === 'ar' ? 'الهاتف:' : currentLanguage === 'fr' ? 'Téléphone:' : 'Phone:'}</strong> +123 456 7890</p>
        <p><strong>{currentLanguage === 'ar' ? 'البريد الإلكتروني:' : currentLanguage === 'fr' ? 'Email:' : 'Email:'}</strong> info@alnasser-schools.com</p>
      </CardBody>
    </Card>
  );
};

export default Details;
