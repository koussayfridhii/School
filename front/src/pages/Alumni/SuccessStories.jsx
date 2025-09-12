import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../store/languageSlice';
import Card, { CardBody, CardHeader } from '../../components/Card';

const SuccessStories = () => {
  const currentLanguage = useSelector(selectLanguage);

  const stories = [
    { name: 'Fatima Ahmed', story: { ar: 'أصبحت طبيبة ناجحة', fr: 'Est devenue une médecin à succès', en: 'Became a successful doctor' } },
    { name: 'Yusuf Ali', story: { ar: 'أسس شركة تكنولوجيا ناشئة', fr: 'A fondé une startup technologique', en: 'Founded a tech startup' } },
  ];

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">
          {currentLanguage === 'ar' ? 'قصص النجاح' : currentLanguage === 'fr' ? 'Histoires de réussite' : 'Success Stories'}
        </h2>
      </CardHeader>
      <CardBody>
        <div className="space-y-4">
          {stories.map(story => (
            <div key={story.name} className="p-4 border rounded-lg">
              <h3 className="text-lg font-semibold">{story.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{story.story[currentLanguage]}</p>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default SuccessStories;
