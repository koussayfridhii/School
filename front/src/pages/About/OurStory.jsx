import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../store/languageSlice';
import Card, { CardBody, CardHeader } from '../../components/Card';

const OurStory = () => {
  const currentLanguage = useSelector(selectLanguage);

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">
          {currentLanguage === 'ar' ? 'قصتنا' : currentLanguage === 'fr' ? 'Notre Histoire' : 'Our Story'}
        </h2>
      </CardHeader>
      <CardBody>
        <p className="mb-4">
          {currentLanguage === 'ar' ? 'تأسست مدارس النصر الخاصة في عام 1990، ومنذ ذلك الحين ونحن ملتزمون بتقديم تعليم متميز.' : currentLanguage === 'fr' ? 'Fondées en 1990, les Écoles Privées Al Nasser se sont engagées à offrir une éducation d\'excellence.' : 'Founded in 1990, Al Nasser Private Schools has been committed to providing excellent education.'}
        </p>
        <p>
          {currentLanguage === 'ar' ? 'على مر السنين، قمنا بتوسيع برامجنا ومرافقنا لتلبية الاحتياجات المتغيرة لطلابنا.' : currentLanguage === 'fr' ? 'Au fil des ans, nous avons élargi nos programmes et nos installations pour répondre aux besoins changeants de nos étudiants.' : 'Over the years, we have expanded our programs and facilities to meet the evolving needs of our students.'}
        </p>
      </CardBody>
    </Card>
  );
};

export default OurStory;
