import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Typography, TextField, Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';

// Utilizar variáveis de ambiente para as credenciais do EmailJS
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '';
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '';

// Inicializar EmailJS com a chave pública
emailjs.init(PUBLIC_KEY);

const ContactContainer = styled.section`
  padding: 4rem 2rem;
  background: var(--background);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.form`
  max-width: 600px;
  width: 100%;
  background: var(--shape);
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid var(--border);
`;

const Title = styled(Typography)`
  color: var(--text);
  margin-bottom: 2rem;
  text-align: center;
  font-weight: bold !important;
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 1rem !important;
  width: 100%;

  .MuiOutlinedInput-root {
    color: var(--text);
    
    fieldset {
      border-color: var(--border);
    }

    &:hover fieldset {
      border-color: var(--primary);
    }
  }

  label {
    color: var(--text-secondary);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      console.log('Tentando enviar email...');
      console.log('Dados do formulário:', formData);
      console.log('Credenciais:', {
        SERVICE_ID: SERVICE_ID ? `${SERVICE_ID.substring(0, 3)}...` : 'não definido',
        TEMPLATE_ID: TEMPLATE_ID ? `${TEMPLATE_ID.substring(0, 3)}...` : 'não definido',
        PUBLIC_KEY: PUBLIC_KEY ? `${PUBLIC_KEY.substring(0, 3)}...` : 'não definido'
      });
      
      // Verifica se as credenciais estão definidas
      if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
        throw new Error('Credenciais do EmailJS não estão configuradas corretamente');
      }
      
      const emailParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Fluxomize',
        to_email: 'contato@fluxomize.com',
        subject: 'Novo contato do site Fluxomize'
      };
      
      console.log('Parâmetros do email:', emailParams);
      
      // Versão alternativa da chamada para garantir compatibilidade
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        emailParams
      );
      
      console.log('Resposta do EmailJS:', result);
      alert('Email enviado com sucesso!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Erro detalhado ao enviar email:', error);
      alert(`Erro ao enviar email: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da Fluxomize.');
    window.open(`https://wa.me/5527997454924?text=${message}`, '_blank');
  };

  // Adicione este useEffect para verificar se as credenciais estão sendo carregadas
  useEffect(() => {
    console.log('Verificando variáveis de ambiente:');
    console.log('PUBLIC_KEY definida?', Boolean(PUBLIC_KEY));
    console.log('SERVICE_ID definido?', Boolean(SERVICE_ID));
    console.log('TEMPLATE_ID definido?', Boolean(TEMPLATE_ID));
  }, []);

  return (
    <ContactContainer>
      <FormContainer onSubmit={handleSubmit}>
        <Title variant="h2">Entre em Contato</Title>
        
        <StyledTextField
          label="Nome"
          name="name"
          value={formData.name}
          onChange={handleChange}
          variant="outlined"
          required
        />

        <StyledTextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
          required
        />

        <StyledTextField
          label="Mensagem"
          name="message"
          value={formData.message}
          onChange={handleChange}
          variant="outlined"
          multiline
          rows={4}
          required
        />

        <ButtonContainer>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            startIcon={<SendIcon />}
            fullWidth
          >
            Enviar Email
          </Button>

          <Button
            variant="contained"
            color="success"
            onClick={handleWhatsApp}
            startIcon={<WhatsAppIcon />}
            fullWidth
          >
            WhatsApp
          </Button>
        </ButtonContainer>
      </FormContainer>
    </ContactContainer>
  );
};

export default Contact;
