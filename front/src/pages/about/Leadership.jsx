import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Card, { CardBody } from '../../components/ui/Card';
import { FaLinkedin } from 'react-icons/fa';

const Leadership = () => {
  const { language } = useSelector((state) => state.language);
  const currentLanguage = language || 'ar';

  const leaders = [
    {
      name: 'Dr. Ahmed Al-Farsi',
      title: { ar: 'مدير المدرسة', fr: 'Directeur de l\'école', en: 'School Director' },
      bio: { ar: 'قائد متمرس يتمتع بخبرة تزيد عن ٢٠ عامًا في الإدارة التعليمية.', fr: 'Un leader chevronné avec plus de 20 ans d\'expérience en administration éducative.', en: 'A seasoned leader with over 20 years of experience in educational administration.' },
      image: 'https://via.placeholder.com/300x300/0D47A1/FFFFFF?text=Dr.+Ahmed',
      linkedin: '#',
    },
    {
      name: 'Fatima Al-Marzouqi',
      title: { ar: 'المديرة الأكاديمية', fr: 'Directrice Académique', en: 'Academic Principal' },
      bio: { ar: 'خبيرة في تطوير المناهج الدراسية وشغوفة بتعزيز بيئات التعلم المبتكرة.', fr: 'Experte en développement de programmes et passionnée par la promotion d\'environnements d\'apprentissage innovants.', en: 'An expert in curriculum development, passionate about fostering innovative learning environments.' },
      image: 'https://via.placeholder.com/300x300/1976D2/FFFFFF?text=Fatima+A.',
      linkedin: '#',
    },
    {
      name: 'Youssef El-Masri',
      title: { ar: 'رئيس قسم شؤون الطلاب', fr: 'Chef de la Vie Étudiante', en: 'Head of Student Affairs' },
      bio: { ar: 'مكرس لضمان رفاهية الطلاب ونجاحهم خارج الفصول الدراسية.', fr: 'Dévoué à assurer le bien-être et la réussite des élèves en dehors de la salle de classe.', en: 'Dedicated to ensuring student well-being and success outside the classroom.' },
      image: 'https://via.placeholder.com/300x300/3B82F6/FFFFFF?text=Youssef+E.',
      linkedin: '#',
    },
     {
      name: 'Aisha Ibrahim',
      title: { ar: 'مديرة المرحلة الابتدائية', fr: 'Directrice de l\'école primaire', en: 'Head of Primary School' },
      bio: { ar: 'متخصصة في التعليم في مرحلة الطفولة المبكرة، تركز على خلق أساس متين للمتعلمين الصغار.', fr: 'Spécialiste de l\'éducation de la petite enfance, axée sur la création d\'une base solide pour les jeunes apprenants.', en: 'A specialist in early childhood education, focused on creating a strong foundation for young learners.' },
      image: 'https://via.placeholder.com/300x300/60A5FA/FFFFFF?text=Aisha+I.',
      linkedin: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="py-12 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
      >
        {leaders.map((leader, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="text-center h-full group">
              <div className="relative mt-4">
                <img src={leader.image} alt={leader.name} className="w-32 h-32 rounded-full mx-auto border-4 border-white dark:border-gray-800 shadow-lg transform group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardBody className="pt-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{leader.name}</h3>
                <p className="text-brand dark:text-brand-light font-semibold mt-1">{leader.title[currentLanguage]}</p>
                <p className="text-gray-600 dark:text-gray-300 mt-4 text-sm h-24">{leader.bio[currentLanguage]}</p>
                <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-gray-500 hover:text-brand dark:hover:text-brand-light transition-colors duration-300">
                  <FaLinkedin size={24} />
                </a>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Leadership;
