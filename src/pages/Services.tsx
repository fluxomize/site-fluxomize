// src/components/Services/index.tsx

import styled from 'styled-components';
import { Paper, Typography } from '@mui/material';

const ServicesContainer = styled.section`
  padding: 2rem;
  background: var(--background);
  min-height: auto;
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
        Serviços
      </SectionTitle>
      <Grid>
        <ServiceCard elevation={0}>
          <ServiceIcon>
            🧪
          </ServiceIcon>
          <ServiceTitle variant="h5">
            Testes
          </ServiceTitle>
          <ServiceDescription variant="body1">
            Realizamos testes minuciosos em sistemas e aplicações para garantir que cada funcionalidade opere exatamente como esperado.
            Nossa abordagem criteriosa identifica falhas ocultas e oportunidades de melhoria antes que se tornem problemas, garantindo máxima qualidade, segurança e confiabilidade para o seu software.
            Para que seu sistema funcione como deve — antes de chegar ao usuário.
          </ServiceDescription>
        </ServiceCard>
        
        <ServiceCard elevation={0}>
          <ServiceIcon>
            🤖
          </ServiceIcon>
          <ServiceTitle variant="h5">
            Automações
          </ServiceTitle>
          <ServiceDescription variant="body1">
            Simplificamos e automatizamos processos operacionais para aumentar a eficiência e reduzir erros.
            Aplicamos tecnologia inteligente para executar tarefas repetitivas de forma autônoma, liberando sua equipe para focar no que realmente importa e impulsionando a produtividade.
          </ServiceDescription>
        </ServiceCard>

        <ServiceCard elevation={0}>
          <ServiceIcon>
            🛠️
          </ServiceIcon>
          <ServiceTitle variant="h5">
            Ferramentas sob Medida e Integrações
          </ServiceTitle>
          <ServiceDescription variant="body1">
            Desenvolvemos ferramentas funcionais e ajustadas às necessidades reais do seu negócio.
            Realizamos integrações inteligentes entre plataformas, fazendo seus sistemas trabalharem em conjunto de forma fluida e eficiente — criando uma operação mais conectada, ágil e sustentável.
          </ServiceDescription>
        </ServiceCard>
      </Grid>
    </ServicesContainer>
  );
};