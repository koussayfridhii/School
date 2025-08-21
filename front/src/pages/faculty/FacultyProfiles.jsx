import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Card, { CardBody } from '../../components/ui/Card';

const FacultyProfiles = () => {
  const { language } = useSelector((state) => state.language);
  const currentLanguage = language || 'ar';

  const faculty = [
    {
      name: 'Dr. David Chen',
      department: { ar: 'قسم العلوم', fr: 'Département des sciences', en: 'Science Department' },
      bio: { ar: 'دكتوراه في الكيمياء، متخصص في الكيمياء العضوية.', fr: 'Doctorat en chimie, spécialisé en chimie organique.', en: 'Ph.D. in Chemistry, specializing in organic chemistry.' },
      image: 'https://via.placeholder.com/300x300/0D47A1/FFFFFF?text=Dr.+Chen',
    },
    {
      name: 'Maria Garcia',
      department: { ar: 'قسم الرياضيات', fr: 'Département de mathématiques', en: 'Mathematics Department' },
      bio: { ar: 'ماجستير في الرياضيات، شغوفة بجعل الرياضيات ممتعة.', fr: 'Master en mathématiques, passionnée par l\'idée de rendre les mathématiques amusantes.', en: 'M.S. in Mathematics, passionate about making math engaging.' },
      image: 'https://via.placeholder.com/300x300/1976D2/FFFFFF?text=Maria+G.',
    },
    {
      name: 'Omar Abdullah',
      department: { ar: 'قسم اللغة العربية', fr: 'Département de langue arabe', en: 'Arabic Language Department' },
      bio: { ar: 'خبير في الأدب العربي والتاريخ.', fr: 'Expert en littérature et histoire arabes.', en: 'An expert in Arabic literature and history.' },
      image: 'https://via.placeholder.com/300x300/3B82F6/FFFFFF?text=Omar+A.',
    },
    {
      name: 'Sophie Dubois',
      department: { ar: 'قسم اللغة الفرنسية', fr: 'Département de français', en: 'French Department' },
      bio: { ar: 'متحدثة أصلية ولديها شغف بمشاركة اللغة والثقافة الفرنسية.', fr: 'Locutrice native passionnée par le partage de la langue et de la culture françaises.', en: 'A native speaker with a passion for sharing French language and culture.' },
      image: 'https://via.placeholder.com/300x300/60A5FA/FFFFFF?text=Sophie+D.',
    },
  ];

  const pageTitle = { ar: 'ملفات أعضاء هيئة التدريس', fr: 'Profils du corps professoral', en: 'Faculty Profiles' };

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">{pageTitle[currentLanguage]}</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="text-center h-full">
                <div className="p-6">
                  <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto shadow-lg" />
                </div>
                <CardBody>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{member.name}</h3>
                  <p className="text-brand dark:text-brand-light font-semibold mt-1">{member.department[currentLanguage]}</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-4 text-sm">{member.bio[currentLanguage]}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacultyProfiles;
