// src/styles/global.ts

import { createGlobalStyle, keyframes } from 'styled-components';
import { Paper, Typography } from '@mui/material';
import styled from 'styled-components';

const backgroundAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #051014;
    --primary: #00e6b8;
    --secondary: #008b8b;
    --text: #e0ffff;
    --text-secondary: #88acac;
    --shape: #0a1f24;
    --shape-hover: #122a30;
    --border: #1a363c;
    --success: #00cc99;
    --danger: #ff3366;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    color: var(--text);
    font-family: 'Orbitron', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    background: linear-gradient(
      45deg,
      var(--background),
      var(--shape),
      var(--background)
    );
    background-size: 400% 400%;
    animation: ${backgroundAnimation} 15s ease infinite;
    position: relative;

    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      background-image: radial-gradient(
        circle at 50% 50%,
        rgba(0, 230, 184, 0.03) 0%,
        transparent 50%
      );
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover::before {
      opacity: 1;
    }
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Orbitron', sans-serif;
    font-weight: 600;
    color: var(--text);
    text-shadow: 0 0 15px rgba(0, 230, 184, 0.3);
  }

  button {
    cursor: pointer;
    border: 1px solid var(--primary);
    background: transparent;
    color: var(--primary);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      background: var(--primary);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: all 0.5s ease;
    }

    &:hover {
      color: var(--background);
      box-shadow: 0 0 20px rgba(0, 230, 184, 0.4);
      
      &::before {
        width: 300%;
        height: 300%;
        opacity: 1;
      }
    }

    span {
      position: relative;
      z-index: 1;
    }
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  a {
    color: var(--primary);
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;

    &:hover {
      color: var(--secondary);
      text-shadow: 0 0 12px rgba(0, 230, 184, 0.6);
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--primary);
      transition: width 0.3s ease;
      box-shadow: 0 0 8px rgba(0, 230, 184, 0.4);
    }

    &:hover::after {
      width: 100%;
    }
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--shape);
    box-shadow: inset 0 0 8px rgba(0, 230, 184, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 4px;
    box-shadow: 0 0 15px rgba(0, 230, 184, 0.3);
  }

  ::selection {
    background: var(--primary);
    color: var(--background);
  }
`;

// Services styled components
export const ServicesContainer = styled.section`
  padding: 4rem 1rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ServiceCard = styled(Paper)`
  padding: 1.5rem;
  text-align: center;
  background: var(--shape) !important;
  transition: all 0.3s ease;
  border: 1px solid var(--border);

  @media (min-width: 768px) {
    padding: 2rem;
  }

  &:hover {
    transform: translateY(-5px);
    background: var(--shape-hover) !important;
    border-color: var(--primary);
    box-shadow: 0 0 20px rgba(0, 230, 184, 0.4);
  }
`;

export const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 1rem;
  text-shadow: 0 0 15px rgba(0, 230, 184, 0.3);
  
  @media (min-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
  
  svg {
    width: 40px;
    height: 40px;

    @media (min-width: 768px) {
      width: 48px;
      height: 48px;
    }
  }
`;

export const ServiceTitle = styled(Typography)`
  margin-bottom: 0.75rem !important;
  font-size: 1.25rem !important;

  @media (min-width: 768px) {
    margin-bottom: 1rem !important;
    font-size: 1.5rem !important;
  }
`;

export const ServiceDescription = styled(Typography)`
  color: var(--text-secondary) !important;
  line-height: 1.6 !important;
  font-size: 0.875rem !important;

  @media (min-width: 768px) {
    font-size: 1rem !important;
  }
`;

export const SectionTitle = styled(Typography)`
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  font-size: 1.75rem !important;

  @media (min-width: 768px) {
    margin-bottom: 3rem;
    font-size: 2.25rem !important;
  }
`;

export const MainTitle = styled(Typography)`
  font-size: 2.5rem !important;
  font-weight: 700 !important;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--primary);
  text-shadow: 0 0 20px rgba(0, 230, 184, 0.4);

  @media (min-width: 768px) {
    font-size: 3.5rem !important;
    margin-bottom: 4rem;
  }
`;

export const SubTitle = styled(Typography)`
  font-size: 1.5rem !important;
  font-weight: 600 !important;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--text);

  @media (min-width: 768px) {
    font-size: 2rem !important;
    margin-bottom: 2.5rem;
  }
`;

export const CardTitle = styled(Typography)`
  font-size: 1.25rem !important;
  font-weight: 600 !important;
  margin-bottom: 1rem;
  color: var(--primary);

  @media (min-width: 768px) {
    font-size: 1.5rem !important;
    margin-bottom: 1.25rem;
  }
`;

export const FooterTitle = styled(Typography)`
  font-size: 1.25rem !important;
  font-weight: 600 !important;
  margin-bottom: 1.5rem;
  color: var(--text);
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (min-width: 768px) {
    font-size: 1.5rem !important;
    margin-bottom: 2rem;
  }
`;