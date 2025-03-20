// src/components/Services/index.tsx

import styled from 'styled-components';
import { Paper, Typography } from '@mui/material';

const ServicesContainer = styled.section`
  padding: 4rem 2rem;
  background: var(--background);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const ServiceCard = styled(Paper)`
  padding: 2rem;
  text-align: center;
  background: var(--shape) !important;
  transition: all 0.3s ease;
  border: 1px solid var(--border);

  &:hover {
    transform: translateY(-5px);
    background: var(--shape-hover) !important;
    border-color: var(--primary);
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
  
  svg {
    width: 48px;
    height: 48px;
  }
`;

const ServiceTitle = styled(Typography)`
  margin-bottom: 1rem !important;
  color: var(--text) !important;
  font-weight: 600 !important;
`;

const ServiceDescription = styled(Typography)`
  color: var(--text-secondary) !important;
  line-height: 1.6 !important;
`;

const SectionTitle = styled(Typography)`
  color: var(--text);
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
`;

export const Services = () => {
  return (
    <ServicesContainer>
      <SectionTitle variant="h2">
        Nossos Serviços
      </SectionTitle>
      <Grid>
        <ServiceCard elevation={0}>
          <ServiceIcon>
            🤖
          </ServiceIcon>
          <ServiceTitle variant="h5">
            Automação de Processos (RPA)
          </ServiceTitle>
          <ServiceDescription variant="body1">
            Desenvolvemos soluções RPA de alta performance que automatizam processos repetitivos, 
            reduzem custos operacionais e aumentam a eficiência da sua empresa. Nossas automações 
            são escaláveis e integram-se perfeitamente aos seus sistemas existentes.
          </ServiceDescription>
        </ServiceCard>
        
        <ServiceCard elevation={0}>
          <ServiceIcon>
            🧪
          </ServiceIcon>
          <ServiceTitle variant="h5">
            Testes Automatizados
          </ServiceTitle>
          <ServiceDescription variant="body1">
            Implementamos estratégias completas de testes automatizados que garantem a qualidade 
            e confiabilidade do seu software. Utilizamos as mais modernas ferramentas de teste 
            e práticas de CI/CD para assegurar entregas consistentes e livres de erros.
          </ServiceDescription>
        </ServiceCard>
        
        <ServiceCard elevation={0}>
          <ServiceIcon>
            🔌
          </ServiceIcon>
          <ServiceTitle variant="h5">
            Desenvolvimento de APIs
          </ServiceTitle>
          <ServiceDescription variant="body1">
            Criamos APIs RESTful robustas e seguras que conectam seus sistemas de forma eficiente. 
            Nossas soluções seguem as melhores práticas do mercado, com foco em performance, 
            escalabilidade e documentação clara.
          </ServiceDescription>
        </ServiceCard>
      </Grid>
    </ServicesContainer>
  );
};