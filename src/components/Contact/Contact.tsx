import { useRef, useState } from 'react';
// import './Contact.css';
import { toast } from 'react-toastify';
import CopyButton from '../UtilityComponents/CopyButton/CopyButton';
import { contactList } from '../../CONSTANT/CONSTANT';

import {
  ContactSection,
  ContactDetailsContainer,
  ContactDetailParagraph,
  ContactIconNameContainer,
  ContactForm,
  Label,
  Input,
  Button,
  TextArea,
  ContactInfoFormContainer,
  ContactInfoName,
} from './Contact.styled';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_EMAIL_API_URL}/send-message`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success('Email is sent');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        const errorData = await response.json();
        toast.error(`Email could not be sent: ${errorData.message}`);
      }
    } catch (error) {
      console.error('API error:', error);
      toast.error('Failed to send email. Please try again later.');
    }
  };

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
                  <ContactInfoName
                    href={contact.href}
                    target={contact.target}
                    rel={contact.rel}
                  >
                    {contact.displayName}
                  </ContactInfoName>
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
  );
};
