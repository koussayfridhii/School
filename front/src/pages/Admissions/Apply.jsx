import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../store/languageSlice';
import Card, { CardBody, CardHeader } from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Apply = () => {
  const currentLanguage = useSelector(selectLanguage);
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert(currentLanguage === 'ar' ? 'تم تقديم طلبك بنجاح!' : currentLanguage === 'fr' ? 'Votre candidature a été soumise avec succès!' : 'Your application has been submitted successfully!');
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">
          {currentLanguage === 'ar' ? 'قدم الآن' : currentLanguage === 'fr' ? 'Postulez maintenant' : 'Apply Now'}
        </h2>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="studentName">{currentLanguage === 'ar' ? 'اسم الطالب' : currentLanguage === 'fr' ? 'Nom de l\'étudiant' : 'Student Name'}</label>
            <Input id="studentName" name="studentName" value={formData.studentName} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="parentName">{currentLanguage === 'ar' ? 'اسم ولي الأمر' : currentLanguage === 'fr' ? 'Nom du parent' : 'Parent Name'}</label>
            <Input id="parentName" name="parentName" value={formData.parentName} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="email">{currentLanguage === 'ar' ? 'البريد الإلكتروني' : currentLanguage === 'fr' ? 'Email' : 'Email'}</label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="phone">{currentLanguage === 'ar' ? 'رقم الهاتف' : currentLanguage === 'fr' ? 'Téléphone' : 'Phone Number'}</label>
            <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
          </div>
          <Button type="submit">
            {currentLanguage === 'ar' ? 'إرسال الطلب' : currentLanguage === 'fr' ? 'Soumettre la candidature' : 'Submit Application'}
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default Apply;
