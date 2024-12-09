import { useRef, useState } from 'react';
import { useAdjustMessageAreaHeight } from './ContactUtility/adjustMessageAreaHeight';
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
  ContactMessage,
  Input,
  Button,
  TextArea,
  ContactInfoFormContainer,
  ContactInfoName,
} from './Contact.styled';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  // adjust height of message area
  useAdjustMessageAreaHeight(textAreaRef, formData);

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
    setIsSending(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_EMAIL_API_URL}/message-from-portfolio`,
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
        setIsSending(false);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        const errorData = await response.json();
        toast.error(`Email could not be sent: ${errorData.message}`);
        setIsSending(false);
      }
    } catch (error) {
      console.error('API error:', error);
      toast.error('Failed to send email. Please try again later.');
      setIsSending(false);
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
            <ContactMessage>
              Please connect with me via the email below if you have any
              specific queries.
            </ContactMessage>
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
              ref={textAreaRef}
              id="message"
              name="message"
              rows={1}
              value={formData.message}
              onChange={handleChange}
              required
            ></TextArea>

            <Button disabled={isSending} type="submit">
              {isSending ? 'Sending...' : 'Send Message'}
            </Button>
          </ContactForm>
        </ContactInfoFormContainer>
      </ContactSection>
    </>
  );
};
