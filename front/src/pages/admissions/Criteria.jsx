import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const Criteria = () => {
  const { language } = useSelector((state) => state.language);
  const currentLanguage = language || 'ar';

  const criteria = [
    {
      title: { ar: 'العمر المطلوب', fr: 'Exigences d\'âge', en: 'Age Requirements' },
      description: {
        ar: 'يجب أن يستوفي المتقدمون متطلبات العمر الدنيا لكل صف دراسي بحلول الأول من سبتمبر من عام القبول.',
        fr: 'Les candidats doivent satisfaire aux exigences d\'âge minimum pour chaque niveau scolaire avant le 1er septembre de l\'année d\'admission.',
        en: 'Applicants must meet the minimum age requirements for each grade level by September 1st of the admission year.',
      },
    },
    {
      title: { ar: 'السجل الأكاديمي', fr: 'Dossier Académique', en: 'Academic Record' },
      description: {
        ar: 'مراجعة السجلات المدرسية السابقة للمتقدمين، بما في ذلك الدرجات وتقارير الحضور.',
        fr: 'Examen des dossiers scolaires précédents des candidats, y compris les notes et les rapports de présence.',
        en: 'A review of applicants\' previous school records, including grades and attendance reports.',
      },
    },
    {
      title: { ar: 'نتائج التقييم', fr: 'Résultats de l\'évaluation', en: 'Assessment Results' },
      description: {
        ar: 'أداء مُرضٍ في تقييم القبول الخاص بالمدرسة.',
        fr: 'Performance satisfaisante à l\'évaluation d\'admission de l\'école.',
        en: 'A satisfactory performance on the school\'s admission assessment.',
      },
    },
    {
      title: { ar: 'المقابلة الشخصية', fr: 'Entretien Personnel', en: 'Personal Interview' },
      description: {
        ar: 'مقابلة ناجحة مع الطالب وأولياء الأمور لمناقشة التوافق مع قيم المدرسة ورسالتها.',
        fr: 'Un entretien réussi avec l\'élève et les parents pour discuter de l\'alignement avec les valeurs et la mission de l\'école.',
        en: 'A successful interview with the student and parents to discuss alignment with the school\'s values and mission.',
      },
    },
  ];

  const pageTitle = {
      ar: 'معايير القبول',
      fr: 'Critères d\'Admission',
      en: 'Admission Criteria'
  };

  const pageDescription = {
    ar: 'نحن نبحث عن طلاب متحمسين ومتحفزين ومستعدين للمساهمة في مجتمع مدرستنا النابض بالحياة. تستند قرارات القبول لدينا إلى مراجعة شاملة لكل متقدم.',
    fr: 'Nous recherchons des étudiants enthousiastes, motivés et prêts à contribuer à notre communauté scolaire dynamique. Nos décisions d\'admission sont basées sur un examen holistique de chaque candidat.',
    en: 'We seek enthusiastic, motivated students who are ready to contribute to our vibrant school community. Our admission decisions are based on a holistic review of each applicant.'
  }

  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">{pageTitle[currentLanguage]}</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{pageDescription[currentLanguage]}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            {criteria.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                >
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        <FiCheckCircle className="text-green-500 flex-shrink-0" size={28} />
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{item.title[currentLanguage]}</h2>
                    </div>
                    <p className="mt-4 text-gray-600 dark:text-gray-300 ltr:ml-11 rtl:mr-11">{item.description[currentLanguage]}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Criteria;
