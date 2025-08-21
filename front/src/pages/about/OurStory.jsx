import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const OurStory = () => {
  const { language } = useSelector((state) => state.language);
  const currentLanguage = language || 'ar';

  const content = {
    title: {
      ar: 'قصتنا: رحلة من الإلهام',
      fr: 'Notre Histoire : Un Parcours d\'Inspiration',
      en: 'Our Story: A Journey of Inspiration',
    },
    p1: {
      ar: 'تأسست مدارس النصر الخاصة في عام ١٩٩٨ على يد مجموعة من المعلمين الشغوفين الذين أرادوا إنشاء بيئة تعليمية فريدة من نوعها. بدأت رحلتنا بفصل دراسي واحد وعدد قليل من الطلاب، مدفوعين برؤية لتوفير تعليم شامل لا يركز فقط على التميز الأكاديمي ولكن أيضًا على تنمية الشخصية والقيم الأخلاقية.',
      fr: 'Les Écoles Privées Al Nasser ont été fondées en 1998 par un groupe d\'éducateurs passionnés qui souhaitaient créer un environnement d\'apprentissage unique. Notre parcours a commencé avec une seule salle de classe et une poignée d\'élèves, animés par la vision de fournir une éducation holistique axée non seulement sur l\'excellence académique, mais aussi sur le développement du caractère et les valeurs morales.',
      en: 'Al Nasser Private Schools was founded in 1998 by a group of passionate educators who wanted to create a unique learning environment. Our journey began with a single classroom and a handful of students, driven by a vision to provide holistic education that focuses not only on academic excellence but also on character development and moral values.',
    },
    p2: {
      ar: 'على مر السنين، نمت مدرستنا لتصبح مؤسسة تعليمية رائدة، تخدم مئات الطلاب من خلفيات متنوعة. على الرغم من نمونا، ظل التزامنا بقيمنا الأساسية ثابتًا. نواصل تعزيز مجتمع داعم وشامل حيث يتم تشجيع كل طالب على استكشاف شغفه وتحقيق إمكاناته الكاملة.',
      fr: 'Au fil des ans, notre école est devenue une institution éducative de premier plan, accueillant des centaines d\'élèves d\'horizons divers. Malgré notre croissance, notre engagement envers nos valeurs fondamentales est resté inébranlable. Nous continuons de favoriser une communauté solidaire et inclusive où chaque élève est encouragé à explorer ses passions et à atteindre son plein potentiel.',
      en: 'Over the years, our school has grown into a leading educational institution, serving hundreds of students from diverse backgrounds. Despite our growth, our commitment to our core values has remained steadfast. We continue to foster a supportive and inclusive community where every student is encouraged to explore their passions and achieve their full potential.',
    },
    image: 'https://via.placeholder.com/1200x500/1E3A8A/FFFFFF?text=Since+1998',
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-64 md:h-80 bg-gray-200 dark:bg-gray-700">
        <img src={content.image} alt="Our Story" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white text-center"
          >
            {content.title[currentLanguage]}
          </motion.h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto py-12 px-4">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed rtl:text-right"
        >
          {content.p1[currentLanguage]}
        </motion.p>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed rtl:text-right"
        >
          {content.p2[currentLanguage]}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default OurStory;
