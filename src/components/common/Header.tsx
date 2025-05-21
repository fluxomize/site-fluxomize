// src/components/Header/index.tsx

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 2rem;
  background: var(--shape);
  border-bottom: 1px solid var(--border);
  max-height: 72px;
  height: 72px;
  box-sizing: border-box;
`;

const Logo = styled.img`
  height: 56px;
  max-width: 320px;
  width: auto;
  transition: transform 0.3s ease;
  filter: brightness(0.95);
  object-fit: contain;
  
  @media (max-width: 600px) {
    height: 36px;
    max-width: 160px;
  }
  
  &:hover {
    transform: scale(1.05);
    filter: brightness(1);
  }
`;

const LogoLink = styled(Link)`
  display: block;
  padding: 0.5rem 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--text);
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: var(--primary);
    text-shadow: 0 0 8px rgba(0, 242, 255, 0.6);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--primary);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoLink to="/">
        <Logo 
          src="/Logotipo_Flux_Gelo.png" 
          style={{ userSelect: 'none'}}
        />
      </LogoLink>
      <Nav>
        <NavLink to="/contact">Contato</NavLink>
      </Nav>
    </HeaderContainer>
  );
};