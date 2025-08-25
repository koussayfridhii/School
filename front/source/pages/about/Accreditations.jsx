import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

const Accreditations = () => {
  const { language } = useSelector((state) => state.language);
  const currentLanguage = language || 'ar';

  const accreditations = [
    {
      name: { ar: 'الهيئة الوطنية للتقويم والاعتماد الأكاديمي', fr: 'Commission Nationale pour l\'Accréditation Académique', en: 'National Commission for Academic Accreditation' },
      logo: 'https://via.placeholder.com/150x100/CCCCCC/FFFFFF?text=NCAAA',
      description: {
        ar: 'معتمدة من الهيئة الوطنية للتقويم والاعتماد الأكاديمي، مما يضمن أعلى معايير الجودة في التعليم.',
        fr: 'Accrédité par la Commission nationale pour l\'accréditation académique, garantissant les plus hauts standards de qualité dans l\'éducation.',
        en: 'Accredited by the National Commission for Academic Accreditation, ensuring the highest standards of quality in education.',
      },
    },
    {
      name: { ar: 'منظمة البكالوريا الدولية', fr: 'Organisation du Baccalauréat International', en: 'International Baccalaureate Organization' },
      logo: 'https://via.placeholder.com/150x100/CCCCCC/FFFFFF?text=IBO',
      description: {
        ar: 'مدرسة عالمية معتمدة من منظمة البكالوريا الدولية، نقدم برامج الدبلوم والسنوات المتوسطة والابتدائية.',
        fr: 'Une école du monde de l\'IB autorisée, offrant les programmes du diplôme, du premier cycle secondaire et du primaire.',
        en: 'An authorized IB World School, offering the Diploma, Middle Years, and Primary Years Programmes.',
      },
    },
    {
      name: { ar: 'مجلس المدارس الدولية', fr: 'Conseil des Écoles Internationales', en: 'Council of International Schools' },
      logo: 'https://via.placeholder.com/150x100/CCCCCC/FFFFFF?text=CIS',
      description: {
        ar: 'عضو في مجلس المدارس الدولية، ملتزمون بالتعليم الدولي عالي الجودة.',
        fr: 'Membre du Conseil des écoles internationales, engagé dans une éducation internationale de haute qualité.',
        en: 'A member of the Council of International Schools, committed to high-quality international education.',
      },
    },
     {
      name: { ar: 'Cognia', fr: 'Cognia', en: 'Cognia' },
      logo: 'https://via.placeholder.com/150x100/CCCCCC/FFFFFF?text=Cognia',
      description: {
        ar: 'معتمدة من Cognia، مما يدل على التزامنا بالتحسين المستمر وتوفير تعليم جيد.',
        fr: 'Accrédité par Cognia, démontrant notre engagement envers l\'amélioration continue et la fourniture d\'une éducation de qualité.',
        en: 'Accredited by Cognia, demonstrating our commitment to continuous improvement and providing quality education.',
      },
    },
  ];

  const pageTitle = {
    ar: 'الاعتمادات والتقديرات',
    fr: 'Accréditations et Reconnaissances',
    en: 'Accreditations & Recognitions'
  }

  const pageDescription = {
      ar: 'نفخر بحصولنا على اعتراف من هيئات تعليمية مرموقة محلية ودولية. هذه الاعتمادات هي شهادة على التزامنا بالتميز.',
      fr: 'Nous sommes fiers d\'être reconnus par des organismes éducatifs prestigieux, tant locaux qu\'internationaux. Ces accréditations témoignent de notre engagement envers l\'excellence.',
      en: 'We are proud to be recognized by prestigious educational bodies, both locally and internationally. These accreditations are a testament to our commitment to excellence.'
  }

  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <FiAward className="mx-auto text-5xl text-brand dark:text-brand-light mb-4" />
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">{pageTitle[currentLanguage]}</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{pageDescription[currentLanguage]}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {accreditations.map((acc, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col text-center md:text-left md:flex-row items-center md:space-x-6 rtl:md:space-x-reverse"
          >
            <div className="flex-shrink-0 mb-4 md:mb-0">
              <img src={acc.logo} alt={`${acc.name[currentLanguage]} logo`} className="h-16" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-brand dark:text-brand-light">{acc.name[currentLanguage]}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{acc.description[currentLanguage]}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Accreditations;
