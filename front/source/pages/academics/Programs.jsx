import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Card, { CardBody, CardHeader } from '../../components/ui/Card';
import { FiTrello, FiAward, FiFilm, FiGlobe } from 'react-icons/fi';

const Programs = () => {
  const { language } = useSelector((state) => state.language);
  const currentLanguage = language || 'ar';

  const programs = [
    {
      icon: <FiAward size={28} className="text-white" />,
      title: { ar: 'برنامج البكالوريا الدولية (IB)', fr: 'Programme du Baccalauréat International (IB)', en: 'International Baccalaureate (IB) Programme' },
      description: {
        ar: 'نقدم برنامج دبلوم البكالوريا الدولية المعترف به عالميًا للطلاب في الصفين ١١ و ١٢، لإعدادهم للجامعة وما بعدها.',
        fr: 'Nous offrons le Programme du diplôme de l\'IB, reconnu mondialement, aux élèves de 11e et 12e année, les préparant à l\'université et au-delà.',
        en: 'We offer the globally recognized IB Diploma Programme for students in grades 11 and 12, preparing them for university and beyond.',
      },
    },
    {
      icon: <FiTrello size={28} className="text-white" />,
      title: { ar: 'برنامج STEM المتقدم', fr: 'Programme STEM Avancé', en: 'Advanced STEM Program' },
      description: {
        ar: 'برنامج متخصص يركز على العلوم والتكنولوجيا والهندسة والرياضيات، مع مختبرات حديثة ومشاريع عملية.',
        fr: 'Un programme spécialisé axé sur la science, la technologie, l\'ingénierie et les mathématiques, avec des laboratoires de pointe et des projets pratiques.',
        en: 'A specialized program focusing on Science, Technology, Engineering, and Mathematics, with state-of-the-art labs and hands-on projects.',
      },
    },
    {
      icon: <FiFilm size={28} className="text-white" />,
      title: { ar: 'الفنون والعلوم الإنسانية', fr: 'Arts et Sciences Humaines', en: 'Arts & Humanities' },
      description: {
        ar: 'مجموعة غنية من الدورات في الفنون البصرية والمسرح والموسيقى والأدب، لتشجيع الإبداع والتعبير عن الذات.',
        fr: 'Une riche sélection de cours en arts visuels, théâtre, musique et littérature, encourageant la créativité et l\'expression de soi.',
        en: 'A rich selection of courses in visual arts, theater, music, and literature, encouraging creativity and self-expression.',
      },
    },
    {
      icon: <FiGlobe size={28} className="text-white" />,
      title: { ar: 'برامج اللغات العالمية', fr: 'Programmes de Langues du Monde', en: 'World Language Programs' },
      description: {
        ar: 'دورات شاملة في اللغات العربية والفرنسية والإنجليزية، مع التركيز على الطلاقة والتفاهم الثقافي.',
        fr: 'Des cours complets en arabe, français et anglais, axés sur la fluidité et la compréhension culturelle.',
        en: 'Comprehensive courses in Arabic, French, and English, focusing on fluency and cultural understanding.',
      },
    },
  ];

  const pageTitle = {
      ar: 'برامجنا الأكاديمية',
      fr: 'Nos Programmes Académiques',
      en: 'Our Academic Programs'
  }

  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">{pageTitle[currentLanguage]}</h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full text-center hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center">
                    <div className="p-4 bg-brand rounded-full mb-4">
                        {program.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{program.title[currentLanguage]}</h2>
                </CardHeader>
                <CardBody>
                  <p className="text-gray-600 dark:text-gray-300">{program.description[currentLanguage]}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
