import React from 'react';
import styled from 'styled-components';
import { Typography, Grid, Paper } from '@mui/material';

const AboutContainer = styled.section`
  padding: 2rem;
  background: var(--background);
  min-height: auto;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(Typography)`
  color: var(--text);
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  font-weight: bold !important;
`;

const SectionTitle = styled(Typography)`
  color: var(--primary);
  margin: 2rem 0 1rem;
  font-weight: bold !important;
  text-align: center;
`;

const Description = styled(Typography)`
  color: var(--text);
  line-height: 1.8 !important;
  margin-bottom: 2rem !important;
  text-align: justify;
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

const ServiceTitle = styled(Typography)`
  margin-bottom: 1rem !important;
  color: var(--text) !important;
  font-weight: 600 !important;
`;

const ServiceDescription = styled(Typography)`
  color: var(--text-secondary) !important;
  line-height: 1.6 !important;
`;

const ValuesGrid = styled(Grid)`
  margin-top: 3rem;
  
  .MuiGrid-item {
    display: flex;
  }
`;

const ValueCard = styled(Paper)`
  padding: 2rem;
  text-align: center;
  background: var(--shape) !important;
  transition: all 0.3s ease;
  border: 1px solid var(--border);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 300px;
  width: 100%;
  
  &:hover {
    transform: translateY(-5px);
    background: var(--shape-hover) !important;
    border-color: var(--primary);
  }
  
  h3 {
    color: var(--text);
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
  }
  
  p {
    color: var(--text-secondary);
    line-height: 1.6;
    flex-grow: 1;
  }
`;

export const About: React.FC = () => {
  return (
    <AboutContainer>
      <Content>
        <Title variant="h2">
          Sobre a Flux
        </Title>
        <Description variant="body1">
          Fundada em 2025, a Fluxomize nasceu com um propósito claro: democratizar o acesso à tecnologia 
          e transformar a maneira como as empresas operam no mundo digital. Nossa jornada começou 
          quando um grupo de especialistas em tecnologia identificou uma lacuna significativa no 
          mercado: a necessidade de soluções tecnológicas acessíveis e eficientes que pudessem 
          realmente impactar positivamente o dia a dia das organizações.
        </Description>

        <SectionTitle variant="h4">
          Nossa Missão
        </SectionTitle>
        <Description variant="body1">
          Capacitar organizações através de soluções tecnológicas focadas em qualidade e automação, 
          promovendo excelência operacional e otimização de processos. Buscamos ser referência em 
          transformação digital, garantindo que cada cliente alcance resultados superiores através 
          da automação inteligente e testes rigorosos de qualidade.
        </Description>

        <SectionTitle variant="h4">
          Visão
        </SectionTitle>
        <Description variant="body1">
          Transformar o avanço da inteligência artificial e da automação em soluções práticas, eficientes e aplicáveis — com clareza, responsabilidade e foco em resultado.
        </Description>

        <SectionTitle variant="h4">
          Valores
        </SectionTitle>
        <ValuesGrid container spacing={3}>
          <Grid item xs={12} md={4}>
            <ValueCard elevation={0}>
              <h3>1. Inteligência Estratégica</h3>
              <p>
                Cada ação parte de uma leitura ampla do contexto e se conecta com objetivos reais.
                Pensamos antes de construir — e construímos para durar.
              </p>
            </ValueCard>
          </Grid>

          <Grid item xs={12} md={4}>
            <ValueCard elevation={0}>
              <h3>2. Clareza Aplicada</h3>
              <p>
                Eliminamos a complexidade desnecessária.
                Entregamos estruturas objetivas, compreensíveis e com foco total em resultado.
              </p>
            </ValueCard>
          </Grid>

          <Grid item xs={12} md={4}>
            <ValueCard elevation={0}>
              <h3>3. Responsabilidade</h3>
              <p>
                Cumprimos o que prometemos.
                Atuamos com ética, transparência e compromisso com o impacto do que entregamos.
              </p>
            </ValueCard>
          </Grid>
        </ValuesGrid>

        <Description variant="body1">
          Hoje, a Fluxomize se destaca no mercado oferecendo soluções em três pilares fundamentais: 
          automatização de processos com RPA, garantia de qualidade de software com testes 
          automatizados, e integração de sistemas através de APIs modernas e robustas. Nossa 
          equipe multidisciplinar trabalha incansavelmente para entregar resultados excepcionais, 
          sempre mantendo nosso compromisso com a inovação e a excelência.
        </Description>
      </Content>
    </AboutContainer>
  );
};
