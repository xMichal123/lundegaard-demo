import React, { useState, useRef, FC, useEffect } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import { useCookies } from 'react-cookie';
import ContactForm from './components/ContactForm';

const Home: FC = () => {

  return (
    <div className="contact-form-container">
      <h1>Contact Us</h1>
      <ContactForm />
    </div>
  );
}

export default Home;