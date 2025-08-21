import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import { FiUsers, FiMail } from 'react-icons/fi';

const PTA = () => {
  const { language } = useSelector((state) => state.language);
  const currentLanguage = language || 'ar';

  const content = {
    title: { ar: 'جمعية الآباء والمعلمين (PTA)', fr: 'Association Parents-Enseignants (PTA)', en: 'Parent-Teacher Association (PTA)' },
    description: {
      ar: 'تلعب جمعية الآباء والمعلمين دورًا حيويًا في مجتمع مدرستنا، حيث تعمل على تعزيز الشراكة القوية بين أولياء الأمور والمعلمين والموظفين.',
      fr: 'Notre PTA joue un rôle vital dans notre communauté scolaire, favorisant un partenariat solide entre les parents, les enseignants et le personnel.',
      en: 'Our PTA plays a vital role in our school community, fostering a strong partnership between parents, teachers, and staff.',
    },
    mission: {
      title: { ar: 'مهمتنا', fr: 'Notre Mission', en: 'Our Mission' },
      text: {
        ar: 'مهمتنا هي إثراء تجربة الطلاب من خلال دعم البرامج الأكاديمية واللامنهجية، وتسهيل التواصل، وتنظيم فعاليات مجتمعية.',
        fr: 'Notre mission est d\'enrichir l\'expérience des élèves en soutenant les programmes académiques et extrascolaires, en facilitant la communication et en organisant des événements communautaires.',
        en: 'Our mission is to enrich the student experience by supporting academic and extracurricular programs, facilitating communication, and organizing community events.',
      },
    },
    getInvolved: {
      title: { ar: 'شارك معنا', fr: 'Impliquez-vous', en: 'Get Involved' },
      text: {
        ar: 'نحن نرحب دائمًا بالمتطوعين الجدد والأفكار الجديدة. انضم إلينا في إحداث فرق!',
        fr: 'Nous accueillons toujours de nouveaux bénévoles et de nouvelles idées. Rejoignez-nous pour faire la différence !',
        en: 'We always welcome new volunteers and fresh ideas. Join us in making a difference!',
      },
      button: { ar: 'اتصل بجمعية الآباء والمعلمين', fr: 'Contacter la PTA', en: 'Contact the PTA' },
    },
  };

  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <FiUsers className="mx-auto text-5xl text-brand dark:text-brand-light mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">{content.title[currentLanguage]}</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{content.description[currentLanguage]}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
            <motion.div initial={{opacity: 0, x: -50}} animate={{opacity: 1, x: 0}} transition={{duration: 0.7}} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{content.mission.title[currentLanguage]}</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{content.mission.text[currentLanguage]}</p>
            </motion.div>
            <motion.div initial={{opacity: 0, x: 50}} animate={{opacity: 1, x: 0}} transition={{duration: 0.7, delay: 0.2}} className="bg-primary-50 dark:bg-brand/20 p-8 rounded-lg text-center flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-brand dark:text-white mb-4">{content.getInvolved.title[currentLanguage]}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">{content.getInvolved.text[currentLanguage]}</p>
                <Button>
                    <FiMail className="inline ltr:mr-2 rtl:ml-2"/> {content.getInvolved.button[currentLanguage]}
                </Button>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PTA;
