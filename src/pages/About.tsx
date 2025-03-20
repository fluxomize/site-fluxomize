import React from 'react';
import styled from 'styled-components';
import { Typography, Grid, Paper } from '@mui/material';

const AboutContainer = styled.section`
  padding: 4rem 2rem;
  background: var(--background);
  min-height: 100vh;
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

export const About: React.FC = () => {
  return (
    <AboutContainer>
      <Content>
        <Title variant="h2">
          Sobre a Fluxomize
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
          Nossa Visão
        </SectionTitle>
        <Description variant="body1">
          Ser reconhecida como uma das 5 maiores referências em qualidade e automação no Brasil até 2030,
          estabelecendo novos padrões de excelência e inovação no mercado nacional. Almejamos liderar
          a transformação digital das empresas brasileiras, sendo sinônimo de confiabilidade e resultados
          excepcionais em soluções tecnológicas.
        </Description>

        <SectionTitle variant="h4">
          Nossos Valores
        </SectionTitle>
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={4}>
            <ServiceCard elevation={0}>
              <ServiceTitle variant="h6">Inovação Constante</ServiceTitle>
              <ServiceDescription variant="body2">
                Buscamos sempre as soluções mais avançadas e criativas.
              </ServiceDescription>
            </ServiceCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ServiceCard elevation={0}>
              <ServiceTitle variant="h6">Excelência Técnica</ServiceTitle>
              <ServiceDescription variant="body2">
                Comprometimento com a qualidade em cada linha de código.
              </ServiceDescription>
            </ServiceCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ServiceCard elevation={0}>
              <ServiceTitle variant="h6">Transparência</ServiceTitle>
              <ServiceDescription variant="body2">
                Comunicação clara e honesta em todas as interações.
              </ServiceDescription>
            </ServiceCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ServiceCard elevation={0}>
              <ServiceTitle variant="h6">Colaboração</ServiceTitle>
              <ServiceDescription variant="body2">
                Trabalho em equipe e parceria genuína com nossos clientes.
              </ServiceDescription>
            </ServiceCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ServiceCard elevation={0}>
              <ServiceTitle variant="h6">Responsabilidade Social</ServiceTitle>
              <ServiceDescription variant="body2">
                Compromisso com o impacto positivo na sociedade.
              </ServiceDescription>
            </ServiceCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ServiceCard elevation={0}>
              <ServiceTitle variant="h6">Sustentabilidade</ServiceTitle>
              <ServiceDescription variant="body2">
                Desenvolvimento de soluções com visão de longo prazo.
              </ServiceDescription>
            </ServiceCard>
          </Grid>
        </Grid>

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
