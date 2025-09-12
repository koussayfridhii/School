import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../store/languageSlice';
import Card, { CardBody, CardHeader } from '../../components/Card';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';

const Inquiry = () => {
  const currentLanguage = useSelector(selectLanguage);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert(currentLanguage === 'ar' ? 'تم إرسال استفسارك بنجاح!' : currentLanguage === 'fr' ? 'Votre demande a été envoyée avec succès!' : 'Your inquiry has been sent successfully!');
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">
          {currentLanguage === 'ar' ? 'نموذج الاستفسار' : currentLanguage === 'fr' ? 'Formulaire de demande' : 'Inquiry Form'}
        </h2>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name">{currentLanguage === 'ar' ? 'الاسم' : currentLanguage === 'fr' ? 'Nom' : 'Name'}</label>
            <Input id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="email">{currentLanguage === 'ar' ? 'البريد الإلكتروني' : currentLanguage === 'fr' ? 'Email' : 'Email'}</label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="message">{currentLanguage === 'ar' ? 'الرسالة' : currentLanguage === 'fr' ? 'Message' : 'Message'}</label>
            <Textarea id="message" name="message" value={formData.message} onChange={handleChange} />
          </div>
          <Button type="submit">
            {currentLanguage === 'ar' ? 'إرسال الاستفسار' : currentLanguage === 'fr' ? 'Envoyer la demande' : 'Send Inquiry'}
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default Inquiry;
