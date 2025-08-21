import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Input from '../../components/ui/Input';
import Textarea from '../../components/ui/Textarea';
import Button from '../../components/ui/Button';
import { FiSend } from 'react-icons/fi';

const ApplyNow = () => {
  const { language } = useSelector((state) => state.language);
  const currentLanguage = language || 'ar';

  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    grade: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    previousSchool: '',
    comments: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    console.log('Application submitted:', formData);
    setTimeout(() => {
      setStatus('success');
      setFormData({ studentName: '', dob: '', grade: '', parentName: '', parentEmail: '', parentPhone: '', previousSchool: '', comments: '' });
      setTimeout(() => setStatus(''), 5000);
    }, 2000);
  };

  const content = {
    title: { ar: 'قدم الآن', fr: 'Postulez Maintenant', en: 'Apply Now' },
    description: { ar: 'ابدأ رحلة طفلك التعليمية معنا. يرجى ملء النموذج أدناه.', fr: 'Commencez le parcours éducatif de votre enfant avec nous. Veuillez remplir le formulaire ci-dessous.', en: 'Start your child\'s educational journey with us. Please fill out the form below.' },
    form: {
      studentName: { ar: 'اسم الطالب الكامل', fr: 'Nom complet de l\'étudiant', en: 'Student\'s Full Name' },
      dob: { ar: 'تاريخ الميلاد', fr: 'Date de naissance', en: 'Date of Birth' },
      grade: { ar: 'الصف المتقدم له', fr: 'Niveau demandé', en: 'Grade Applying For' },
      parentName: { ar: 'اسم ولي الأمر', fr: 'Nom du parent', en: 'Parent\'s Name' },
      parentEmail: { ar: 'بريد ولي الأمر الإلكتروني', fr: 'Email du parent', en: 'Parent\'s Email' },
      parentPhone: { ar: 'هاتف ولي الأمر', fr: 'Téléphone du parent', en: 'Parent\'s Phone' },
      previousSchool: { ar: 'المدرسة السابقة (إن وجد)', fr: 'École précédente (si applicable)', en: 'Previous School (if any)' },
      comments: { ar: 'تعليقات إضافية', fr: 'Commentaires additionnels', en: 'Additional Comments' },
      submit: { ar: 'إرسال الطلب', fr: 'Soumettre la candidature', en: 'Submit Application' },
      sending: { ar: 'جار الإرسال...', fr: 'Envoi en cours...', en: 'Sending...' },
      success: { ar: 'تم استلام طلبك بنجاح!', fr: 'Candidature reçue avec succès !', en: 'Application received successfully!' },
    }
  };

  return (
    <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand dark:text-white">{content.title[currentLanguage]}</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{content.description[currentLanguage]}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <Input name="studentName" placeholder={content.form.studentName[currentLanguage]} value={formData.studentName} onChange={handleChange} required />
            <Input name="dob" type="date" placeholder={content.form.dob[currentLanguage]} value={formData.dob} onChange={handleChange} required />
            <Input name="grade" placeholder={content.form.grade[currentLanguage]} value={formData.grade} onChange={handleChange} required />
            <Input name="parentName" placeholder={content.form.parentName[currentLanguage]} value={formData.parentName} onChange={handleChange} required />
            <Input name="parentEmail" type="email" placeholder={content.form.parentEmail[currentLanguage]} value={formData.parentEmail} onChange={handleChange} required />
            <Input name="parentPhone" type="tel" placeholder={content.form.parentPhone[currentLanguage]} value={formData.parentPhone} onChange={handleChange} required />
            <Input name="previousSchool" placeholder={content.form.previousSchool[currentLanguage]} value={formData.previousSchool} onChange={handleChange} className="md:col-span-2" />
            <Textarea name="comments" placeholder={content.form.comments[currentLanguage]} value={formData.comments} onChange={handleChange} className="md:col-span-2" />

            <div className="md:col-span-2 text-center">
              <Button type="submit" variant="primary" className="w-full md:w-auto" disabled={status === 'sending'}>
                <FiSend className="inline ltr:mr-2 rtl:ml-2" />
                {status === 'sending' ? content.form.sending[currentLanguage] : content.form.submit[currentLanguage]}
              </Button>
            </div>
          </form>
          {status === 'success' && (
            <p className="mt-6 text-center text-green-600 dark:text-green-400">{content.form.success[currentLanguage]}</p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ApplyNow;
