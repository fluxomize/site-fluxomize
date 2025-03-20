import React from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
  100% {
    transform: translateY(0) rotate(360deg);
  }
`;

const HeroContainer = styled.section`
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background: var(--background);
  overflow: hidden;
`;

const FloatingShapes = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 0;
`;

const Shape = styled.div<{ delay: number; duration: number }>`
  position: absolute;
  background: linear-gradient(45deg, var(--primary), var(--primary-light));
  border-radius: 50%;
  opacity: 0.1;
  animation: ${float} ${props => props.duration}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  will-change: transform;
`;

const HeroContent = styled.div`
  max-width: 800px;
  text-align: center;
  z-index: 1;
  
  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    color: var(--text);
    margin-bottom: 1.5rem;
    font-weight: bold;
    letter-spacing: -0.02em;
  }

  p {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: var(--text-secondary);
    margin-bottom: 2rem;
    line-height: 1.6;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const CTAButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  background: linear-gradient(45deg, var(--primary), var(--primary-light));
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 242, 255, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 242, 255, 0.3);
  }
`;

export const Hero: React.FC = () => {
  const shapes = Array.from({ length: 9 }, () => ({
    left: `${Math.random() * 90}%`,
    width: `${Math.random() * 30 + 35}px`,
    duration: Math.random() * 8 + 15,
    delay: Math.random() * 4
  }));

  return (
    <HeroContainer>
      <FloatingShapes>
        {shapes.map((shape, index) => (
          <Shape
            key={index}
            style={{
              left: shape.left,
              width: shape.width,
              height: shape.width
            }}
            delay={shape.delay}
            duration={shape.duration}
          />
        ))}
      </FloatingShapes>
      
      <HeroContent>
        <h1>Fluxomize - Fluxo automatizado e otimizado</h1>
        <p>Automatize e otimize os processos da sua empresa com soluções tecnológicas personalizadas. Nossa expertise em automação de fluxos impulsiona a eficiência e produtividade do seu negócio, garantindo resultados excepcionais.</p>
      </HeroContent>
    </HeroContainer>
  );
};
