import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FiClipboard, FiUserCheck, FiFileText, FiThumbsUp } from 'react-icons/fi';

const AdmissionsProcess = () => {
  const { language } = useSelector((state) => state.language);
  const currentLanguage = language || 'ar';

  const steps = [
    {
      icon: <FiFileText size={32} />,
      title: { ar: 'الخطوة ١: تقديم الطلب', fr: 'Étape 1 : Soumettre la candidature', en: 'Step 1: Submit Application' },
      description: {
        ar: 'أكمل وأرسل نموذج الطلب عبر الإنترنت مع جميع المستندات المطلوبة.',
        fr: 'Remplissez et soumettez notre formulaire de candidature en ligne avec tous les documents requis.',
        en: 'Complete and submit our online application form with all required documents.',
      },
    },
    {
      icon: <FiClipboard size={32} />,
      title: { ar: 'الخطوة ٢: التقييم', fr: 'Étape 2 : Évaluation', en: 'Step 2: Assessment' },
      description: {
        ar: 'سيخضع المتقدمون لتقييم مناسب لأعمارهم لتقييم استعدادهم الأكاديمي.',
        fr: 'Les candidats passeront une évaluation adaptée à leur âge pour évaluer leur préparation académique.',
        en: 'Applicants will undergo an age-appropriate assessment to evaluate their academic readiness.',
      },
    },
    {
      icon: <FiUserCheck size={32} />,
      title: { ar: 'الخطوة ٣: المقابلة', fr: 'Étape 3 : Entretien', en: 'Step 3: Interview' },
      description: {
        ar: 'سيتم دعوة المرشحين المختارين وأولياء أمورهم لإجراء مقابلة مع فريق القبول لدينا.',
        fr: 'Les candidats présélectionnés et leurs parents seront invités à un entretien avec notre équipe d\'admission.',
        en: 'Shortlisted candidates and their parents will be invited for an interview with our admissions team.',
      },
    },
    {
      icon: <FiThumbsUp size={32} />,
      title: { ar: 'الخطوة ٤: قرار القبول', fr: 'Étape 4 : Décision d\'admission', en: 'Step 4: Admission Decision' },
      description: {
        ar: 'سيتم إبلاغ المتقدمين الناجحين بقرار القبول عبر البريد الإلكتروني.',
        fr: 'Les candidats retenus seront informés de la décision d\'admission par e-mail.',
        en: 'Successful applicants will be notified of the admission decision via email.',
      },
    },
  ];

  const pageTitle = {
      ar: 'عملية القبول',
      fr: 'Processus d\'Admission',
      en: 'Admissions Process'
  };

  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">{pageTitle[currentLanguage]}</h1>
        </div>

        <div className="relative">
          {/* Dotted line for desktop */}
          <div
            className="hidden md:block absolute top-8 left-0 w-full h-1 bg-gray-300 dark:bg-gray-600"
            style={{ transform: 'translateY(-50%)' }}
            aria-hidden="true"
          >
            <div className="absolute top-0 left-0 w-full h-full border-t-2 border-dashed border-gray-400 dark:border-gray-500"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center flex flex-col items-center"
              >
                <div className="relative z-10 w-16 h-16 flex items-center justify-center bg-brand rounded-full text-white shadow-lg mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{step.title[currentLanguage]}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description[currentLanguage]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsProcess;
