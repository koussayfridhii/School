import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';

const Blog = () => {
  const { language } = useSelector((state) => state.language);
  const currentLanguage = language || 'ar';

  const blogPosts = [
    {
      id: 1,
      title: { ar: 'أهمية التعليم ثنائي اللغة', fr: 'L\'importance de l\'éducation bilingue', en: 'The Importance of Bilingual Education' },
      author: 'Dr. Fatima Al-Marzouqi',
      date: '2024-10-20',
      excerpt: { ar: 'استكشاف الفوائد المعرفية والثقافية لتعلم لغات متعددة من سن مبكرة.', fr: 'Explorer les avantages cognitifs et culturels de l\'apprentissage de plusieurs langues dès le plus jeune âge.', en: 'Exploring the cognitive and cultural benefits of learning multiple languages from a young age.' },
      image: 'https://via.placeholder.com/800x400/0D47A1/FFFFFF?text=Bilingual+Education',
    },
    {
      id: 2,
      title: { ar: 'نصائح للتحضير لامتحانات نهاية الفصل', fr: 'Conseils pour la préparation aux examens', en: 'Tips for Final Exam Preparation' },
      author: 'Mr. Youssef El-Masri',
      date: '2024-11-10',
      excerpt: { ar: 'استراتيجيات فعالة لمساعدة الطلاب على التفوق في امتحاناتهم وتقليل التوتر.', fr: 'Stratégies efficaces pour aider les élèves à exceller dans leurs examens et à réduire le stress.', en: 'Effective strategies to help students excel in their exams and reduce stress.' },
      image: 'https://via.placeholder.com/800x400/1976D2/FFFFFF?text=Exam+Tips',
    },
  ];

  const pageTitle = { ar: 'المدونة', fr: 'Blog', en: 'Blog' };
  const readMore = { ar: 'اقرأ المزيد', fr: 'Lire la suite', en: 'Read More' };

  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">{pageTitle[currentLanguage]}</h1>
        </div>
        <div className="space-y-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="grid md:grid-cols-5 gap-8 items-center"
            >
              <div className="md:col-span-2">
                <img src={post.image} alt={post.title[currentLanguage]} className="rounded-lg shadow-lg w-full h-full object-cover" />
              </div>
              <div className="md:col-span-3 rtl:text-right">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{post.title[currentLanguage]}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {post.author} - {post.date}
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">{post.excerpt[currentLanguage]}</p>
                <div className="mt-6">
                  {/* The link will eventually go to a detailed blog post page, e.g., /blog/1 */}
                  <Link to={`/news/blog`}>
                    <Button>{readMore[currentLanguage]}</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
