import { useRef, useState } from 'react';
// import './Contact.css';
import emailjs from '@emailjs/browser';
import {toast} from 'react-toastify';
import CopyButton from '../UtilityComponents/CopyButton/CopyButton';
import { contactList } from '../../CONSTANT/CONSTANT';

import { ContactSection,
  ContactDetailsContainer,
  ContactDetailParagraph,
  ContactIconNameContainer,
  ContactForm,
  Label,
  Input,
  Button,
  TextArea,
  ContactInfoFormContainer,
  ContactInfoName
 } from './Contact.styled';

type FormData = {
    name: string;
    email: string;
    message: string
}

export const Contact = () => {
const formRef = useRef<HTMLFormElement>(null);
const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
})

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
}

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
        emailjs.sendForm('service_qfie3ob', 'template_bi5zjw4', formRef.current, {
          publicKey: 'C372p1m_voPbDxOfy'
        })
        .then(() => {
          toast.success('Email is sent');
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        })
        .catch((error) => {
          toast.error('Email could not be sent.');
          console.error('EmailJS error:', error);
        });
      }
}

  return (
    <>
      <ContactSection>
        <h3>Contact</h3>
        <ContactInfoFormContainer>
          <ContactDetailsContainer>
            {contactList.map((contact, index) => (
              <ContactDetailParagraph key={index}>
                  <ContactIconNameContainer>
                    <i className={contact.iconClass}></i> 
                    <ContactInfoName href={contact.href} target={contact.target} rel={contact.rel}>{contact.displayName}</ContactInfoName>
                  </ContactIconNameContainer>
                  <CopyButton link={contact.link ? contact.link : contact.href} />
              </ContactDetailParagraph>
            ))}
          </ContactDetailsContainer>
          
          <ContactForm ref={formRef} onSubmit={handleSubmit}>
            <Label htmlFor="name">Name:</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            
            <Label htmlFor="message">Message:</Label>
            <TextArea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            ></TextArea>
            
            <Button type="submit">Send Message</Button>
          </ContactForm>
        </ContactInfoFormContainer>
      </ContactSection> 
    </>
  )
}
