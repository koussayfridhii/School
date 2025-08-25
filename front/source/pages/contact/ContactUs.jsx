import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Input from '../../components/ui/Input';
import Textarea from '../../components/ui/Textarea';
import Button from '../../components/ui/Button';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const ContactUs = () => {
  const { language } = useSelector((state) => state.language);
  const currentLanguage = language || 'ar';

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate form submission
    console.log('Form submitted:', formData);
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    }, 2000);
  };

  const content = {
    title: { ar: 'اتصل بنا', fr: 'Contactez-Nous', en: 'Contact Us' },
    description: { ar: 'نحن هنا للمساعدة. تواصل معنا لأي استفسارات.', fr: 'Nous sommes là pour vous aider. Contactez-nous pour toute question.', en: 'We are here to help. Reach out to us with any inquiries.' },
    contactInfo: [
      {
        icon: <FiMapPin size={24} className="text-brand dark:text-brand-light" />,
        title: { ar: 'العنوان', fr: 'Adresse', en: 'Address' },
        text: { ar: '١٢٣ شارع المعرفة، المدينة التعليمية، الرياض', fr: '123 Rue de la Connaissance, Cité de l\'Éducation, Riyad', en: '123 Knowledge St, Education City, Riyadh' },
      },
      {
        icon: <FiPhone size={24} className="text-brand dark:text-brand-light" />,
        title: { ar: 'الهاتف', fr: 'Téléphone', en: 'Phone' },
        text: { ar: '+٩٦٦ ١٢ ٣٤٥ ٦٧٨٩', fr: '+966 12 345 6789', en: '+966 12 345 6789' },
      },
      {
        icon: <FiMail size={24} className="text-brand dark:text-brand-light" />,
        title: { ar: 'البريد الإلكتروني', fr: 'Email', en: 'Email' },
        text: { ar: 'info@alnasser.edu.sa', fr: 'info@alnasser.edu.sa', en: 'info@alnasser.edu.sa' },
      },
    ],
    form: {
      name: { ar: 'الاسم الكامل', fr: 'Nom complet', en: 'Full Name' },
      email: { ar: 'البريد الإلكتروني', fr: 'Email', en: 'Email Address' },
      subject: { ar: 'الموضوع', fr: 'Sujet', en: 'Subject' },
      message: { ar: 'رسالتك', fr: 'Votre message', en: 'Your Message' },
      submit: { ar: 'إرسال الرسالة', fr: 'Envoyer le message', en: 'Send Message' },
      sending: { ar: 'جار الإرسال...', fr: 'Envoi en cours...', en: 'Sending...' },
      success: { ar: 'تم استلام رسالتك! سنقوم بالرد قريباً.', fr: 'Message reçu ! Nous vous répondrons bientôt.', en: 'Message received! We will get back to you soon.' },
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand dark:text-white">{content.title[currentLanguage]}</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{content.description[currentLanguage]}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg h-full">
              <div className="space-y-8">
                {content.contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="flex-shrink-0 bg-primary-100 dark:bg-brand/20 p-4 rounded-full">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{item.title[currentLanguage]}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{item.text[currentLanguage]}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Map Placeholder</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input id="name" name="name" type="text" placeholder={content.form.name[currentLanguage]} value={formData.name} onChange={handleChange} required />
                <Input id="email" name="email" type="email" placeholder={content.form.email[currentLanguage]} value={formData.email} onChange={handleChange} required />
                <Input id="subject" name="subject" type="text" placeholder={content.form.subject[currentLanguage]} value={formData.subject} onChange={handleChange} required />
                <Textarea id="message" name="message" placeholder={content.form.message[currentLanguage]} value={formData.message} onChange={handleChange} required />
                <div>
                  <Button type="submit" variant="primary" className="w-full" disabled={status === 'sending'}>
                    {status === 'sending' ? content.form.sending[currentLanguage] : content.form.submit[currentLanguage]}
                  </Button>
                </div>
              </form>
              {status === 'success' && (
                <p className="mt-4 text-center text-green-500 dark:text-green-400">{content.form.success[currentLanguage]}</p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
