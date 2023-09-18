import React, { useState } from 'react';
import KindOfRequestSelect from './KindOfRequestSelect';
import PolicyNumberInput from './PolicyNumberInput';
import NameInput from './NameInput';
import SurnameInput from './SurnameInput';
import RequestTextarea from './RequestTextarea';
import SubmitButton from './SubmitButton';
import axios from 'axios';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    kindOfRequest: '',
    policyNumber: '',
    name: '',
    surname: '',
    request: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        const response = await axios.post('/api/contact-requests/submit', formData);
        alert('Thank you! Your request will be addressed soon with id: ' + response.data.id + '.')
        console.log('Form submitted successfully:', response.data);
        // Handle success or navigate to a success page
    } catch (error) {
        console.error('Form submission error:', error);
        // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <KindOfRequestSelect />
      <PolicyNumberInput />
      <NameInput />
      <SurnameInput />
      <RequestTextarea />
      <SubmitButton />
    </form>
  );
};

export default ContactForm;
