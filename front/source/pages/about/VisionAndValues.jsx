import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FiEye, FiTarget, FiHeart } from 'react-icons/fi';
import Card, { CardBody, CardHeader } from '../../components/ui/Card';

const VisionAndValues = () => {
  const { language } = useSelector((state) => state.language);
  const currentLanguage = language || 'ar';

  const content = {
    vision: {
      title: { ar: 'رؤيتنا', fr: 'Notre Vision', en: 'Our Vision' },
      text: {
        ar: 'أن نكون منارة للتميز التعليمي، نعد الطلاب ليصبحوا مواطنين عالميين مسؤولين ومبتكرين وقادة متعاطفين في مجتمعاتهم.',
        fr: 'Être un phare d\'excellence éducative, préparant les élèves à devenir des citoyens du monde responsables, des innovateurs et des leaders compatissants dans leurs communautés.',
        en: 'To be a beacon of educational excellence, preparing students to become responsible global citizens, innovators, and compassionate leaders in their communities.',
      },
      icon: <FiEye size={40} className="text-brand dark:text-brand-light" />,
    },
    mission: {
      title: { ar: 'رسالتنا', fr: 'Notre Mission', en: 'Our Mission' },
      text: {
        ar: 'مهمتنا هي توفير بيئة تعليمية آمنة ومحفزة وشاملة تمكن الطلاب من تحقيق إمكاناتهم الأكاديمية والشخصية والاجتماعية الكاملة. نحن ملتزمون بتعزيز حب التعلم مدى الحياة والتفكير النقدي واحترام التنوع.',
        fr: 'Notre mission est de fournir un environnement d\'apprentissage sûr, stimulant et inclusif qui permet aux élèves d\'atteindre leur plein potentiel académique, personnel et social. Nous nous engageons à promouvoir l\'amour de l\'apprentissage tout au long de la vie, la pensée critique et le respect de la diversité.',
        en: 'Our mission is to provide a safe, stimulating, and inclusive learning environment that empowers students to achieve their full academic, personal, and social potential. We are committed to fostering a lifelong love of learning, critical thinking, and a respect for diversity.',
      },
      icon: <FiTarget size={40} className="text-brand dark:text-brand-light" />,
    },
    values: {
      title: { ar: 'قيمنا', fr: 'Nos Valeurs', en: 'Our Values' },
      list: [
        { name: { ar: 'التميز', fr: 'Excellence', en: 'Excellence' }, desc: { ar: 'نسعى جاهدين لتحقيق أعلى المعايير في كل ما نقوم به.', fr: 'Nous nous efforçons d\'atteindre les plus hauts standards dans tout ce que nous faisons.', en: 'We strive for the highest standards in everything we do.' } },
        { name: { ar: 'النزاهة', fr: 'Intégrité', en: 'Integrity' }, desc: { ar: 'نتمسك بالمبادئ الأخلاقية والصدق في جميع أفعالنا.', fr: 'Nous respectons les principes moraux et l\'honnêteté dans toutes nos actions.', en: 'We uphold moral principles and honesty in all our actions.' } },
        { name: { ar: 'الاحترام', fr: 'Respect', en: 'Respect' }, desc: { ar: 'نعامل الجميع بلطف وكرامة وتقدير.', fr: 'Nous traitons tout le monde avec gentillesse, dignité et appréciation.', en: 'We treat everyone with kindness, dignity, and appreciation.' } },
        { name: { ar: 'التعاون', fr: 'Collaboration', en: 'Collaboration' }, desc: { ar: 'نعمل معًا كفريق واحد لتحقيق أهدافنا المشتركة.', fr: 'Nous travaillons ensemble en équipe pour atteindre nos objectifs communs.', en: 'We work together as a team to achieve our common goals.' } },
        { name: { ar: 'الابتكار', fr: 'Innovation', en: 'Innovation' }, desc: { ar: 'نحتضن الأفكار الجديدة والحلول الإبداعية.', fr: 'Nous adoptons les nouvelles idées et les solutions créatives.', en: 'We embrace new ideas and creative solutions.' } },
        { name: { ar: 'المجتمع', fr: 'Communauté', en: 'Community' }, desc: { ar: 'نبني مجتمعًا مدرسيًا قويًا وداعمًا.', fr: 'Nous bâtissons une communauté scolaire forte et solidaire.', en: 'We build a strong and supportive school community.' } },
      ],
      icon: <FiHeart size={40} className="text-brand dark:text-brand-light" />,
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="py-12 px-4">
      {/* Vision and Mission */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-16">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <Card className="h-full">
            <CardBody className="text-center">
              <div className="mb-4 inline-block p-4 bg-primary-100 dark:bg-brand/20 rounded-full">{content.vision.icon}</div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">{content.vision.title[currentLanguage]}</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{content.vision.text[currentLanguage]}</p>
            </CardBody>
          </Card>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
          <Card className="h-full">
            <CardBody className="text-center">
              <div className="mb-4 inline-block p-4 bg-primary-100 dark:bg-brand/20 rounded-full">{content.mission.icon}</div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">{content.mission.title[currentLanguage]}</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{content.mission.text[currentLanguage]}</p>
            </CardBody>
          </Card>
        </motion.div>
      </div>

      {/* Values */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
            <div className="mb-4 inline-block p-4 bg-primary-100 dark:bg-brand/20 rounded-full">{content.values.icon}</div>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">{content.values.title[currentLanguage]}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.values.list.map((value, index) => (
            <motion.div key={index} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}>
                <Card className="text-center h-full">
                    <CardHeader>
                        <h3 className="text-2xl font-semibold text-brand dark:text-brand-light">{value.name[currentLanguage]}</h3>
                    </CardHeader>
                    <CardBody>
                        <p className="text-gray-600 dark:text-gray-300">{value.desc[currentLanguage]}</p>
                    </CardBody>
                </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisionAndValues;
