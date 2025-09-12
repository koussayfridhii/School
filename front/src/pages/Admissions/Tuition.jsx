import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../store/languageSlice';
import Card, { CardBody, CardHeader } from '../../components/Card';

const Tuition = () => {
  const currentLanguage = useSelector(selectLanguage);

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">
          {currentLanguage === 'ar' ? 'الرسوم الدراسية' : currentLanguage === 'fr' ? 'Frais de scolarité' : 'Tuition & Fees'}
        </h2>
      </CardHeader>
      <CardBody>
        <p>
          {currentLanguage === 'ar' ? 'يرجى الاتصال بمكتب القبول للحصول على معلومات مفصلة حول الرسوم الدراسية.' : currentLanguage === 'fr' ? 'Veuillez contacter le bureau des admissions pour des informations détaillées sur les frais de scolarité.' : 'Please contact the admissions office for detailed information on tuition and fees.'}
        </p>
      </CardBody>
    </Card>
  );
};

export default Tuition;
