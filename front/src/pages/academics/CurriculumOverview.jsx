import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FiBookOpen, FiStar, FiUsers } from 'react-icons/fi';

const CurriculumOverview = () => {
  const { language } = useSelector((state) => state.language);
  const currentLanguage = language || 'ar';

  const content = {
    title: {
      ar: 'نظرة عامة على المناهج الدراسية',
      fr: 'Aperçu du Programme d\'Études',
      en: 'Curriculum Overview',
    },
    description: {
      ar: 'تم تصميم منهجنا لتوفير تعليم شامل ومتوازن يلبي الاحتياجات الفردية لكل طالب. نحن ندمج أفضل الممارسات الدولية مع الحفاظ على قيمنا الثقافية.',
      fr: 'Notre programme est conçu pour offrir une éducation holistique et équilibrée qui répond aux besoins individuels de chaque élève. Nous intégrons les meilleures pratiques internationales tout en préservant nos valeurs culturelles.',
      en: 'Our curriculum is designed to provide a holistic and balanced education that meets the individual needs of each student. We integrate the best international practices while preserving our cultural values.',
    },
    stages: [
      {
        icon: <FiUsers size={32} className="text-brand dark:text-brand-light" />,
        name: { ar: 'المرحلة الابتدائية (الصف ١-٥)', fr: 'Primaire (Classes 1-5)', en: 'Primary School (Grades 1-5)' },
        focus: {
          ar: 'التركيز على مهارات القراءة والكتابة والحساب الأساسية، والتعلم القائم على الاستقصاء، والتنمية الاجتماعية.',
          fr: 'Accent sur les compétences fondamentales en littératie et numératie, l\'apprentissage par l\'enquête et le développement social.',
          en: 'Focus on foundational literacy and numeracy skills, inquiry-based learning, and social development.',
        },
      },
      {
        icon: <FiStar size={32} className="text-brand dark:text-brand-light" />,
        name: { ar: 'المرحلة المتوسطة (الصف ٦-٨)', fr: 'Collège (Classes 6-8)', en: 'Middle School (Grades 6-8)' },
        focus: {
          ar: 'تطوير مهارات التفكير النقدي، ودراسة متعددة التخصصات، وزيادة استقلالية الطلاب.',
          fr: 'Développement de la pensée critique, études interdisciplinaires et autonomie accrue des élèves.',
          en: 'Developing critical thinking skills, interdisciplinary study, and increased student autonomy.',
        },
      },
      {
        icon: <FiBookOpen size={32} className="text-brand dark:text-brand-light" />,
        name: { ar: 'المرحلة الثانوية (الصف ٩-١٢)', fr: 'Lycée (Classes 9-12)', en: 'High School (Grades 9-12)' },
        focus: {
          ar: 'مسارات أكاديمية متخصصة، والتحضير للجامعة، وتنمية المهارات القيادية.',
          fr: 'Parcours académiques spécialisés, préparation à l\'université et développement du leadership.',
          en: 'Specialized academic tracks, university preparation, and leadership development.',
        },
      },
    ],
  };

  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">{content.title[currentLanguage]}</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{content.description[currentLanguage]}</p>
        </div>
        <div className="space-y-8">
            {content.stages.map((stage, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-center space-x-6 rtl:space-x-reverse"
                >
                    <div className="flex-shrink-0 bg-primary-100 dark:bg-brand/20 p-4 rounded-full">
                        {stage.icon}
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{stage.name[currentLanguage]}</h2>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">{stage.focus[currentLanguage]}</p>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CurriculumOverview;
