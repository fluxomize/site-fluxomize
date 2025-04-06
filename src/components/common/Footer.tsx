import React from 'react';
import styled from 'styled-components';
import { Typography, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const FooterContainer = styled.footer`
  background: var(--shape);
  padding: 2rem;
  border-top: 1px solid var(--border);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Copyright = styled(Typography)`
  color: var(--text-secondary);
  text-align: center;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          <IconButton
            href="https://linkedin.com/company/fluxomize"
            target="_blank"
            aria-label="LinkedIn"
            sx={{ color: 'var(--text)' }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            href="https://github.com/fluxomize"
            target="_blank"
            aria-label="GitHub"
            sx={{ color: 'var(--text)' }}
          >
            <GitHubIcon />
          </IconButton>
        </SocialLinks>
        <Copyright variant="body2">
          &copy; {new Date().getFullYear()} Flux powered by Fluxomize. Transformando ideias em soluções digitais com inteligência e eficiência. Todos os direitos reservados.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
