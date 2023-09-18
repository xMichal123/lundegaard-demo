import React, { useState, useRef, FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import { useCookies } from 'react-cookie';
import ContactForm from './ContactForm';

const Home: FC = () => {

  return (
    <div className="contact-form-container">
      <h1>Contact Us</h1>
      <ContactForm />
    </div>
  );
}

export default Home;