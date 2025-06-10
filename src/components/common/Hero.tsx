import React from 'react';
import styled, { keyframes } from 'styled-components';
import GlobalStyles from '../../styles/globalStyles';

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
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
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
    margin-bottom: 1rem;
    line-height: 1.6;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Hero: React.FC = () => {
  const shapes = Array.from({ length: 9 }, () => ({
    left: `${Math.random() * 90}%`,
    width: `${Math.random() * 30 + 35}px`,
    duration: Math.random() * 8 + 15,
    delay: Math.random() * 5
  }));

  return (
    <HeroContainer>
      <FloatingShapes>
        {shapes.map((shape, index) => (
          <Shape
            key={index}
            style={{ left: shape.left, width: shape.width }}
            duration={shape.duration}
            delay={shape.delay}
          />
        ))}
      </FloatingShapes>
      <HeroContent>
        <img
          src="/Tipografia_Flux_Gelo.png"
          alt="Flux logo"
          style={{ userSelect: 'none', maxWidth: '100%', height: 'auto' }}
        />
        <p>
        Transformando processos em soluções claras e confiáveis.
        </p>
      </HeroContent>
    </HeroContainer>
  );
};
