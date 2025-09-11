import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../store/languageSlice';
import Card, { CardBody, CardHeader } from '../../components/Card';

const Blog = () => {
  const currentLanguage = useSelector(selectLanguage);

  const posts = [
    { title: { ar: 'أهمية القراءة', fr: 'L\'importance de la lecture', en: 'The Importance of Reading' }, author: 'Mr. John Doe', date: '2024-09-01' },
    { title: { ar: 'نصائح للتعلم الفعال', fr: 'Conseils pour un apprentissage efficace', en: 'Tips for Effective Learning' }, author: 'Ms. Jane Smith', date: '2024-08-25' },
  ];

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">
          {currentLanguage === 'ar' ? 'المدونة' : currentLanguage === 'fr' ? 'Blog' : 'Blog'}
        </h2>
      </CardHeader>
      <CardBody>
        <div className="space-y-4">
          {posts.map(post => (
            <div key={post.title.en} className="p-4 border rounded-lg">
              <h3 className="text-lg font-semibold">{post.title[currentLanguage]}</h3>
              <p className="text-sm text-gray-500">{currentLanguage === 'ar' ? 'بواسطة' : currentLanguage === 'fr' ? 'Par' : 'By'} {post.author} - {post.date}</p>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default Blog;
