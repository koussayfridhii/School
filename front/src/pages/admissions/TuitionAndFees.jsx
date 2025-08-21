import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FiDollarSign, FiDownload } from 'react-icons/fi';
import Button from '../../components/ui/Button';

const TuitionAndFees = () => {
  const { language } = useSelector((state) => state.language);
  const currentLanguage = language || 'ar';

  const feeStructure = [
    {
      grade: { ar: 'المرحلة الابتدائية (١-٥)', fr: 'Primaire (1-5)', en: 'Primary School (1-5)' },
      annual: { ar: '٢٥٬٠٠٠ ريال سعودي', fr: '25 000 SAR', en: 'SAR 25,000' },
      semester: { ar: '١٢٬٥٠٠ ريال سعودي', fr: '12 500 SAR', en: 'SAR 12,500' },
    },
    {
      grade: { ar: 'المرحلة المتوسطة (٦-٨)', fr: 'Collège (6-8)', en: 'Middle School (6-8)' },
      annual: { ar: '٣٠٬٠٠٠ ريال سعودي', fr: '30 000 SAR', en: 'SAR 30,000' },
      semester: { ar: '١٥٬٠٠٠ ريال سعودي', fr: '15 000 SAR', en: 'SAR 15,000' },
    },
    {
      grade: { ar: 'المرحلة الثانوية (٩-١٢)', fr: 'Lycée (9-12)', en: 'High School (9-12)' },
      annual: { ar: '٣٥٬٠٠٠ ريال سعودي', fr: '35 000 SAR', en: 'SAR 35,000' },
      semester: { ar: '١٧٬٥٠٠ ريال سعودي', fr: '17 500 SAR', en: 'SAR 17,500' },
    },
  ];

  const pageTitle = { ar: 'الرسوم الدراسية', fr: 'Frais de Scolarité', en: 'Tuition & Fees' };
  const description = { ar: 'نحن نقدم هيكل رسوم شفاف. الرسوم تشمل الكتب والأنشطة الأساسية.', fr: 'Nous offrons une structure de frais transparente. Les frais couvrent les manuels et les activités de base.', en: 'We offer a transparent fee structure. Fees are inclusive of textbooks and basic activities.' };
  const tableHeaders = {
    grade: { ar: 'المرحلة الدراسية', fr: 'Niveau Scolaire', en: 'Grade Level' },
    annual: { ar: 'الرسوم السنوية', fr: 'Frais Annuels', en: 'Annual Fee' },
    semester: { ar: 'رسوم الفصل الدراسي', fr: 'Frais Semestriels', en: 'Semester Fee' },
  };
  const downloadText = { ar: 'تنزيل جدول الرسوم الكامل', fr: 'Télécharger le barème des frais', en: 'Download Full Fee Schedule' };

  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <FiDollarSign className="mx-auto text-5xl text-brand dark:text-brand-light mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">{pageTitle[currentLanguage]}</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{description[currentLanguage]}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-x-auto"
        >
          <table className="w-full text-left dark:text-gray-300">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="p-4 font-semibold">{tableHeaders.grade[currentLanguage]}</th>
                <th className="p-4 font-semibold">{tableHeaders.annual[currentLanguage]}</th>
                <th className="p-4 font-semibold">{tableHeaders.semester[currentLanguage]}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
              {feeStructure.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="p-4 font-medium text-gray-800 dark:text-white">{item.grade[currentLanguage]}</td>
                  <td className="p-4">{item.annual[currentLanguage]}</td>
                  <td className="p-4">{item.semester[currentLanguage]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <div className="text-center mt-12">
            <Button variant="outline">
                <FiDownload className="ltr:mr-2 rtl:ml-2"/> {downloadText[currentLanguage]}
            </Button>
        </div>
      </div>
    </div>
  );
};

export default TuitionAndFees;
