import React from 'react';
import styled from 'styled-components';
import { Typography, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const FooterContainer = styled.footer`
  background: var(--shape);
  padding: 3rem 2rem;
  border-top: 1px solid var(--border);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: var(--text);
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Flux</h3>
          <p>Site oficial da Fluxomize</p>
          <p>Transformando ideias em soluções digitais</p>
        </FooterSection>

        <FooterSection>
          <h3>Contato</h3>
          <p>Email: contato@fluxomize.com.br</p>
          <p>Telefone: (11) 9999-9999</p>
          <p>São Paulo, SP</p>
        </FooterSection>

        <FooterSection>
          <h3>Redes Sociais</h3>
          <p>LinkedIn: /fluxomize</p>
          <p>Instagram: @fluxomize</p>
          <p>GitHub: /fluxomize</p>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <p>&copy; {new Date().getFullYear()} Fluxomize. Todos os direitos reservados.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
