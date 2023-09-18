import React from 'react';
import KindOfRequestSelect from './KindOfRequestSelect';
import PolicyNumberInput from './PolicyNumberInput';
import NameInput from './NameInput';
import SurnameInput from './SurnameInput';
import RequestTextarea from './RequestTextarea';
import SubmitButton from './SubmitButton';

const ContactForm: React.FC = () => {
  // Implement form submission logic later
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Implement form submission logic here
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
